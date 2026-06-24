import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const { Pool } = pkg;
import * as schema from './schema.ts';

export const createPool = () => {
  const config: any = {
    connectionTimeoutMillis: 15000,
    ssl: {
      rejectUnauthorized: false
    }
  };

  if (process.env.DATABASE_URL) {
    config.connectionString = process.env.DATABASE_URL;
  } else {
    config.host = process.env.SQL_HOST;
    config.user = process.env.SQL_USER;
    config.password = process.env.SQL_PASSWORD;
    config.database = process.env.SQL_DB_NAME;
  }

  return new Pool(config);
};

const pool = createPool();

pool.on('error', (err) => {
  console.error('Unexpected error on idle SQL pool client:', err);
});

export const db = drizzle(pool, { schema });
