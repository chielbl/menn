import { Product, type ProductDTO } from '@/models';
import type { Request, Response } from 'express';

export const createProduct = async (
  req: Request<{ body: ProductDTO }>,
  res: Response,
) => {
  const { body } = req;

  try {
    const product = await Product.create(body);
    res.status(201).send({ product });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
