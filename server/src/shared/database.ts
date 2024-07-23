import mongoose from 'mongoose';

const databaseUrl = process.env.DATABASE_URL || '';

export const connectDatabase = async () => {
  try {
    await mongoose.connect(databaseUrl);
    console.info(`ℹ️  Connected to the database`);
    return mongoose.connection;
  } catch (error) {
    throw new Error('Failed to connect to the database! ' + error);
  }
};
