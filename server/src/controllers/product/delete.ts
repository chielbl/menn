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

export const deleteHandler = async (req: Request, res: Response<string>) => {
  const { id } = req.params;

  await ProductModel.findByIdAndDelete(id);

  return res.send(`Product with ${id} is deleted`);
};
