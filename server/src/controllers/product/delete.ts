import { ProductModel } from '@/models';
import type { Request, Response } from 'express';
import mongoose from 'mongoose';
import { z } from 'zod';
import { validateRequestParams } from 'zod-express-middleware';

export const deleteValidator = validateRequestParams(
  z.object({
    id: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val)),
  }),
);

type ResProduct = { message: string } | { error: string };

export const deleteHandler = async (
  req: Request,
  res: Response<ResProduct>,
) => {
  const { id } = req.params;

  await ProductModel.findByIdAndDelete(id);
  return res.send({ message: `Product with ${id} is deleted` });
};
