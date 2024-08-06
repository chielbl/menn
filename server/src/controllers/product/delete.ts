import { ProductModel } from '@/models';
import { BadRequest, log } from '@/shared';
import type { Request, Response } from 'express';
import mongoose from 'mongoose';
import { z } from 'zod';

const deleteSchema = z.object({
  id: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val)),
});

export const deleteHandler = async (req: Request, res: Response<string>) => {
  const { params } = req;
  const { data, success, error } = deleteSchema.safeParse(params);

  if (!success) {
    log.error(error.flatten());
    throw new BadRequest('Invalid id');
  }

  const { id } = data;

  await ProductModel.findByIdAndDelete(id);

  return res.send(`Product with ${id} is deleted`);
};
