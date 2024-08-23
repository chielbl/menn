import { env } from './../../../src/shared/env';
import mongoose from 'mongoose';
import { mongo, type MongoStatus } from '../../../src/db/mongo';

export const mongoTest = (status: MongoStatus | 'drop' = 'connect') => {
  if (status === 'drop') {
    return mongoose.connection
      .dropDatabase()
      .catch((error) => console.error(error));
  }

  return mongo(status, env.DATABASE_URL_API_TEST);
};
