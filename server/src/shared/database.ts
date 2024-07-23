import mongoose from 'mongoose';
import { log } from './log';

const databaseUrl = process.env.DATABASE_URL || '';

export const connectDatabase = async () => {
  try {
    await mongoose.connect(databaseUrl);
    log.info(`Connected to the database`);
    return mongoose.connection;
  } catch (error) {
    throw new Error('Failed to connect to the database! ' + error);
  }
};
