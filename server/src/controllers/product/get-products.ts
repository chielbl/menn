import { Product, type ProductDTO, type TProduct } from '@/models';
import type { Res } from '../types';
import { mapperProductDTO } from './mappers';

export const getProducts = async (_: null, res: Res<ProductDTO[]>) => {
  const products = await Product.find();

  if (!products) {
    return res.status(404).json({ error: 'Products not found' });
  }

  res.status(200).json({ data: products.map(mapperProductDTO) });
};
