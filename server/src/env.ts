import 'dotenv/config';
import { log } from './log';
import pkg from '../package.json';

type Env = {
  HOST: string;
  PORT: string;
  DATABASE_URL: string;
};

// Fetch variables from environment
export const env: Env = {
  HOST: process.env.HOST!,
  PORT: process.env.PORT!,
  DATABASE_URL: process.env.DATABASE_URL!,
};

export const logEnvAppInfo = () => {
  log.info('');
  log.info(`----------${pkg.version}----------`);
  for (const envKey in env) {
    let envValue = env[envKey];

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
