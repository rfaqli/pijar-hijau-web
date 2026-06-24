import express from 'express';
import cors from 'cors';
import path from 'path';
import { requireAuth, AuthRequest } from './src/middleware/auth';
import { updateUserProfile, getUserProfile, getAllUsers, createCustomUser, getUserByEmail, updateUserPassword } from './src/db/users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret_pijarhijau';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Initialize Super Admin
const initSuperAdmin = async () => {
  if (process.env.VERCEL) return;
  try {
    const email = 'rifkifadhilatilaqli@gmail.com';
    const existing = await getUserByEmail(email);
    const hash = await bcrypt.hash('Admin4321', 10);
    if (!existing) {
      await createCustomUser(email, hash);
      console.log('Super admin seeded successfully');
    } else {
      await updateUserPassword(email, hash);
      console.log('Super admin password updated successfully');
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
    const token = jwt.sign({ email: user.email, uid: user.id.toString() }, JWT_SECRET, { expiresIn: '7d' });
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
    const token = jwt.sign({ email: user.email, uid: user.id.toString() }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.post('/api/auth/sync', requireAuth, async (req: AuthRequest, res) => {
  try {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
    const { email } = req.user;
    const user = await getUserByEmail(email);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
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

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
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

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Express Global Error:', err);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

async function startViteServer() {
  if (process.env.NODE_ENV !== 'production' && process.env.VERCEL !== '1') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else if (!process.env.VERCEL) {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }
}

// Only start the server if NOT running on Vercel
if (!process.env.VERCEL) {
  startViteServer().then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  });
}

export default app;
