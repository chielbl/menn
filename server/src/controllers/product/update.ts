import { ProductModel } from '@/models';
import { BadRequest, log, NotFound } from '@/shared';
import type { Request, Response } from 'express';
import mongoose from 'mongoose';
import { z } from 'zod';

const updateSchema = z.object({
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

export const updateHandler = async (req: Request, res: Response<string>) => {
  const { params, body } = updateSchema.parse({
    params: req.params,
    body: req.body,
  });
  const { id } = params;
  const product = await ProductModel.findById(id);

  if (!product) throw new NotFound('Product not found');

  await ProductModel.updateOne({ _id: id }, body);

  return res.status(200).json('Product updated');
};
