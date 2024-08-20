import mongoose from 'mongoose';

export const mongooseDB = (
  status: 'connect' | 'disconnect' | 'drop' = 'connect',
) => {
  if (status === 'disconnect') {
    return mongoose.connection.close();
  }

  if (status === 'drop') {
    return mongoose.connection
      .dropDatabase()
      .catch((error) => console.error(error));
  }

  return mongoose.connect('mongodb://localhost:27017/menn-api-test');
};
