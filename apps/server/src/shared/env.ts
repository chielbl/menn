import 'dotenv/config';
import pkg from '@/../package.json';
import { log } from '.';

type Env = {
  HOST: string;
  PORT: string;
  LOG_ENABLED: string;
  LOG_LEVEL: string;
  DATABASE_URL: string;
  DATABASE_URL_TEST: string;
  DATABASE_URL_API_TEST: string;
};

// Fetch variables from environment
export const env: Env = {
  HOST: process.env.HOST!,
  PORT: process.env.PORT!,
  LOG_ENABLED: process.env.LOG_ENABLED!,
  LOG_LEVEL: process.env.LOG_LEVEL!,
  DATABASE_URL: process.env.DATABASE_URL!,
  DATABASE_URL_TEST: process.env.DATABASE_URL_TEST!,
  DATABASE_URL_API_TEST: process.env.DATABASE_URL_API_TEST!,
};

export const logEnvAppInfo = () => {
  log.info('');
  log.info(`----------${pkg.version}----------`);
  for (const envKey in env) {
    let envValue = env[envKey as keyof Env];

    if (envKey.includes('KEY') || envKey.includes('SECRET')) {
      envValue = envValue.slice(0, 1) + '********' + envValue.slice(-1);
    }

    if (envValue) {
      log.info(`- ${envKey}: ${envValue || ''}`);
    } else {
      log.warn(`- ${envKey}: NOT SET OR EMPTY 🤔`);
    }
  }
  log.info('-------------------------');
  log.info('');
};
