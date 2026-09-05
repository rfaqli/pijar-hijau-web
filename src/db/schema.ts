import { pgTable, serial, text, varchar, timestamp, boolean } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  password: text('password'),
  password_hash: text('password_hash'),
  name: text('name'),
  role: text('role').default('user'),
  is_admin: boolean('is_admin').default(false),
  createdAt: timestamp('createdAt').default(sql`now()`),
  created_at: timestamp('created_at').default(sql`now()`),
  education: varchar('education', { length: 255 }),
  university: varchar('university', { length: 255 }),
  field: varchar('field', { length: 255 }),
  linkedin: varchar('linkedin', { length: 255 }),
});
