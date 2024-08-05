import { ProductModel } from '@/models';
import { mapperProductDTO } from './mappers';
import type { ProductDTO } from './types';
import type { Request, Response } from 'express';
import { NotFound } from '@/shared';

export const getAllHandler = async (
  _req: Request,
  res: Response<ProductDTO[]>,
) => {
  const products = await ProductModel.find();

  if (!products) throw new NotFound('No products found');

  return res.status(200).json(products.map(mapperProductDTO));
};
