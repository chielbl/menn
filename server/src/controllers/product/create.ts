import { ProductModel } from '@/models';
import { mapperProductDTO } from './mappers';
import type { ProductDTO } from './types';
import type { Request, Response } from 'express';
import { z } from 'zod';
import { validateRequestBody } from 'zod-express-middleware';

export const createValidator = validateRequestBody(
  z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    price: z.number(),
  }),
);

export const createHandler = async (
  req: Request,
  res: Response<ProductDTO>,
) => {
  const { body } = req;
  const product = await ProductModel.create(body);

  return res.status(201).send(mapperProductDTO(product));
};
