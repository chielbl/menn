import 'dotenv/config';

type Env = {
  host: string;
  port: string;
  databaseUrl: string;
};

// Fetch variables from environment or set with default values
export const env: Env = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '8000',
  databaseUrl: process.env.DATABASE_URL || '',
};
