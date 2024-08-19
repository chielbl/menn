import { productsMD } from '../mocked-data';
import { ProductModel } from './../../../src/db/models/product';
import mongoose from 'mongoose';

export const mongooseDB = (
  status: 'connect' | 'disconnect' | 'drop' | 'seed' = 'connect',
) => {
  if (status === 'disconnect') {
    return mongoose.connection.close();
  }

  if (status === 'seed') {
    const promises = productsMD.map((data) => {
      const product = new ProductModel(data);
      return product.save();
    });

    return Promise.all(promises);
  }

  if (status === 'drop') {
    return mongoose.connection
      .dropDatabase()
      .catch((error) => console.error(error));
  }

  return mongoose.connect('mongodb://localhost:27017/menn-api-test');
};
