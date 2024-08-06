import { ProductModel } from '@/models';
import { mapperProductDTO } from './mappers';
import type { ProductDTO } from './types';
import type { Request, Response } from 'express';
import { z } from 'zod';
import mongoose from 'mongoose';
import { NotFound } from '@/shared';

const getSchema = z.object({
  id: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val)),
});

export const getHandler = async (req: Request, res: Response<ProductDTO>) => {
  const { params } = req;
  const { id } = getSchema.parse(params);
  const product = await ProductModel.findById(id);

  if (!product) throw new NotFound('Product not found');

  return res.status(200).json(mapperProductDTO(product));
};
