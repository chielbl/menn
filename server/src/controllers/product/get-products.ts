import { Product, type ProductDTO } from '@/models';
import type { Req, Res } from '../types';
import { mapperProductDTO } from './mappers';

export const getProducts = async (_: Req<null>, res: Res<ProductDTO[]>) => {
  const products = await Product.find();

  if (!products) {
    res.status(404).json({ error: 'Products not found' });
  }

  res.status(200).json({ data: products.map(mapperProductDTO) });
};
