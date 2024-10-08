import { Schema } from 'mongoose';
import { ProductModel } from '@/db/models';
import { mapperProductDTO } from './mappers';
import type { Request, Response } from 'express';

import type { Product as ProductDTO } from '@repo/contract/types';
import {
  productsCreateMutationRequestSchema,
  productsCreateMutationResponseSchema,
} from '@repo/contract/server/schemas';

export const createHandler = async (
  req: Request,
  res: Response<ProductDTO>,
) => {
  const { body } = req;
  const data = productsCreateMutationRequestSchema.parse(body);
  const product = await ProductModel.create(data);
  const productDTO = mapperProductDTO(product);
  const validProductDTO =
    productsCreateMutationResponseSchema.parse(productDTO);

  return res.status(201).send(validProductDTO);
};
