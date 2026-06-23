import express from 'express';
import cors from 'cors';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { requireAuth, AuthRequest } from './src/middleware/auth.ts';
import { getOrCreateUser, updateUserProfile, getUserProfile, getAllUsers, createCustomUser, getUserByEmail } from './src/db/users.ts';
import { adminAuth } from './src/lib/firebase-admin.ts';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret_pijarhijau';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Initialize Super Admin
  const initSuperAdmin = async () => {
    try {
      const email = 'rifkifadhilatilaqli@gmail.com';
      const existing = await getUserByEmail(email);
      if (!existing) {
        const hash = await bcrypt.hash('PIJARHIJAU_Aqli_7', 10);
        await createCustomUser(email, hash);
        console.log('Super admin seeded successfully');
      }
    } catch (e) {
      console.error('Error seeding super admin', e);
    }
  };
  initSuperAdmin();

  app.post('/api/auth/custom-register', async (req, res) => {
    try {
      const { email, password } = req.body;
      const existing = await getUserByEmail(email);
      if (existing) {
        return res.status(400).json({ error: 'Email sudah terdaftar.' });
      }
      const hash = await bcrypt.hash(password, 10);
      const user = await createCustomUser(email, hash);
      const token = jwt.sign({ email: user.email, uid: user.firebaseUid }, JWT_SECRET, { expiresIn: '7d' });
      res.json({ token, user });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });

  app.post('/api/auth/custom-login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await getUserByEmail(email);
      if (!user || !user.password) {
        return res.status(400).json({ error: 'Email atau password salah.' });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(400).json({ error: 'Email atau password salah.' });
      }
      const token = jwt.sign({ email: user.email, uid: user.firebaseUid }, JWT_SECRET, { expiresIn: '7d' });
      res.json({ token, user });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });

  app.post('/api/auth/sync', requireAuth, async (req: AuthRequest, res) => {
    try {
      if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
      const { email, uid, name } = req.user;
      const user = await getOrCreateUser(uid || null, email || '', name || 'Pengguna Pijar Hijau');
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });

  app.post('/api/profile', requireAuth, async (req: AuthRequest, res) => {
    try {
      if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
      const { email } = req.user;
      const user = await updateUserProfile(email, req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });

  app.get('/api/profile', requireAuth, async (req: AuthRequest, res) => {
    try {
      if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
      const { email } = req.user;
      const user = await getUserProfile(email);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });

  app.get('/api/users', requireAuth, async (req: AuthRequest, res) => {
    try {
      if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
      if (req.user.email !== 'rifkifadhilatilaqli@gmail.com') {
        return res.status(403).json({ error: 'Forbidden' });
      }
      const users = await getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
