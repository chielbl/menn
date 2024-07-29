import { Product, type ProductDTO, type TProduct } from '@/models';
import type { Req, Res } from '../types';
import { mapperProductDTO } from './mappers';

export const createProduct = async (
  req: Req<TProduct>,
  res: Res<ProductDTO>,
) => {
  const { body } = req;
  const product = await Product.create(body);

  if (!product) {
    res.status(400).send({ error: 'Product not created' });
  }

  res.status(201).send({ data: mapperProductDTO(product) });
};
