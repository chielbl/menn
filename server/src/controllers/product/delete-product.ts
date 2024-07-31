import { ProductModel } from '@/models';
import type { Request, Response } from 'express';

type ResProduct = { message: string } | { error: string };

export const deleteProduct = async (
  req: Request,
  res: Response<ResProduct>,
) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ error: 'ID is required' });
  }

  await ProductModel.findByIdAndDelete(id);
  return res.send({ message: `Product with ${id} is deleted` });
};
