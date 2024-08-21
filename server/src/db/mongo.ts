import { env, log } from '@/shared';
import mongoose from 'mongoose';

export type MongoStatus = 'connect' | 'disconnect';

/**
 *
 * @param status
 * @returns
 */
export const mongo = (status: MongoStatus, uri?: string) => {
  const mongoConnection = mongoose.connection;
  const readyState = mongoConnection.readyState; // https://mongoosejs.com/docs/api/connection.html#Connection.prototype.readyState

  if (status === 'disconnect' || readyState === 1) {
    mongoConnection.close();
    log.info(`Disconnected to the database`);
    return;
  }

  mongoose.connect(uri || env.DATABASE_URL);
  log.info(`Connected to the database`);

  return;
};
