import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findByIdentifier } from '../models/userModel.js';

const SECRET = process.env.JWT_SECRET || 'secret';

export async function register(data) {
  const hashed = await bcrypt.hash(data.password, 10);
  const user = await createUser({ ...data, password: hashed });
  return { id: user.id, username: user.username, email: user.email };
}

export async function login(identifier, password) {
  const user = await findByIdentifier(identifier);
  if (!user) return null;
  const match = await bcrypt.compare(password, user.password);
  if (!match) return null;
  const token = jwt.sign({ userId: user.id }, SECRET);
  return { token };
}
