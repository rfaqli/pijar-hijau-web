import { db } from './index.js';
import { users } from './schema.js';
import { eq } from 'drizzle-orm';

export async function createCustomUser(email: string, passwordHash: string) {
  try {
    const result = await db.insert(users)
      .values({
        email,
        password: passwordHash
      })
      .returning();
    return result[0];
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error("Database query failed. Please try again later.", { cause: error });
  }
}

export async function getUserByEmail(email: string) {
  try {
    const result = await db.select().from(users).where(eq(users.email, email));
    return result[0];
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error("Database query failed. Please try again later.", { cause: error });
  }
}

export async function updateUserPassword(email: string, passwordHash: string) {
  try {
    const result = await db.update(users)
      .set({ password: passwordHash })
      .where(eq(users.email, email))
      .returning();
    return result[0];
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error("Database query failed. Please try again later.", { cause: error });
  }
}

export async function updateUserProfile(email: string, data: { name: string; education: string; university: string; field: string; linkedin: string; }) {
  try {
    const result = await db.update(users)
      .set(data)
      .where(eq(users.email, email))
      .returning();
    return result[0];
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error("Database query failed. Please try again later.", { cause: error });
  }
}

export async function getUserProfile(email: string) {
  try {
    const result = await db.select().from(users).where(eq(users.email, email));
    return result[0];
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error("Database query failed. Please try again later.", { cause: error });
  }
}

export async function getAllUsers() {
  try {
    const result = await db.select().from(users);
    return result;
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error("Database query failed. Please try again later.", { cause: error });
  }
}
