import { ProductModel } from '@/models';
import type { Request, Response } from 'express';
import mongoose from 'mongoose';
import { z } from 'zod';
import { validateRequest } from 'zod-express-middleware';

export const updateValidator = validateRequest({
  params: z.object({
    id: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val)),
  }),
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    image: z.string().optional(),
    price: z.number().optional(),
  }),
});

type ResProduct = { message: string } | { error: string };

export const updateHandler = async (
  req: Request,
  res: Response<ResProduct>,
) => {
  const { params, body } = req;
  const { id } = params;
  const product = await ProductModel.findById(id);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  await ProductModel.updateOne({ _id: id }, body);

  return res.status(200).json({ message: 'Product updated' });
};
