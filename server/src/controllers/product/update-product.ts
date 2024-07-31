import { ProductModel } from '@/models';
import type { Request, Response } from 'express';

type ResProduct = { message: string } | { error: string };

export const updateProduct = async (
  req: Request,
  res: Response<ResProduct>,
) => {
  const { params, body } = req;
  const { id } = params;

  if (!id) {
    return res.status(400).json({ error: 'Product ID is required' });
  }

  const product = await ProductModel.findById(id);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  await ProductModel.updateOne({ _id: id }, body);

  return res.status(200).json({ message: 'Product updated' });
};
