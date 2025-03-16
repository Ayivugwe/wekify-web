
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
  query_timeout: 10000,
  statement_timeout: 10000,
});

// Add event handler for errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

export { pool };
