import { ProductModel } from '@/models';
import { mapperProductDTO } from './mappers';
import type { ProductDTO } from './types';
import type { Request, Response } from 'express';

type ResProducts = { data: ProductDTO[] } | { error: string };

export const getAllHandler = async (
  _req: Request,
  res: Response<ResProducts>,
) => {
  const products = await ProductModel.find();

  if (!products) {
    return res.status(404).json({ error: 'Products not found' });
  }

  return res.status(200).json({ data: products.map(mapperProductDTO) });
};
