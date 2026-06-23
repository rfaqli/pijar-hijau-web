import { Request, Response, NextFunction } from 'express';
import { adminAuth } from '../lib/firebase-admin.ts';
import { DecodedIdToken } from 'firebase-admin/auth';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: any; // Can be DecodedIdToken or custom JWT payload
}

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret_pijarhijau';

export const requireAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  const token = authHeader.split('Bearer ')[1];
  
  try {
    // Try custom JWT first
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (jwtError) {
    // If not JWT, try Firebase token
    try {
      const decodedToken = await adminAuth.verifyIdToken(token);
      req.user = decodedToken;
      return next();
    } catch (firebaseError) {
      console.error('Error verifying token:', firebaseError);
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
  }
};
