import { ProductModel } from '@/models';
import { mapperProductDTO } from './mappers';
import type { ProductDTO } from './types';
import type { Request, Response } from 'express';
import { validateRequestParams } from 'zod-express-middleware';
import { z } from 'zod';
import mongoose from 'mongoose';
import { NotFound } from '@/shared';

export const getValidator = validateRequestParams(
  z.object({
    id: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val)),
  }),
);

export const getHandler = async (req: Request, res: Response<ProductDTO>) => {
  const { id } = req.params;
  const product = await ProductModel.findById(id);

  if (!product) throw new NotFound('Product not found');

  return res.status(200).json(mapperProductDTO(product));
};
