import { ProductModel, type Product } from '@/models';
import { mapperProductDTO } from './mappers';
import type { ProductDTO } from './types';
import type { Request, Response } from 'express';

type ResProduct = { data: ProductDTO } | { error: string };

export const createProduct = async (
  req: Request,
  res: Response<ResProduct>,
) => {
  const { body } = req;
  const product = await ProductModel.create(body);

  if (!product) {
    res.status(400).send({ error: 'Product not created' });
    return;
  }

  res.status(201).send({ data: mapperProductDTO(product) });
};
