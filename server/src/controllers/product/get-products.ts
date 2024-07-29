import { ProductModel } from '@/models';
import { mapperProductDTO } from './mappers';
import type { ProductDTO } from './types';
import type { Request, Response } from 'express';

type ResProduct = { data: ProductDTO[] } | { error: string };

export const getProducts = async (req: Request, res: Response<ResProduct>) => {
  const { id } = req.params;
  console.log('🚀 ~ getProducts ~ id:', id);
  const products = await ProductModel.find();

  if (!products) {
    res.status(404).json({ error: 'Products not found' });
  }

  res.status(200).json({ data: products.map(mapperProductDTO) });
};
