import { ProductModel } from '@/models';
import { mapperProductDTO } from './mappers';
import type { ProductDTO } from './types';
import type { Request, Response } from 'express';
import { z } from 'zod';
import { BadRequest, log } from '@/shared';

const createSchema = z.object({
  name: z.string(),
  description: z.string(),
  category: z.string(),
  image: z.string(),
  price: z.number(),
});

export const createHandler = async (
  req: Request,
  res: Response<ProductDTO>,
) => {
  const { body } = req;
  const { data, success, error } = createSchema.safeParse(body);

  if (!success) {
    log.error(error.flatten());
    throw new BadRequest('Invalid request body');
  }

  const product = await ProductModel.create(data);

  return res.status(201).send(mapperProductDTO(product));
};
