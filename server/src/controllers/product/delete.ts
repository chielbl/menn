import { ProductModel } from '@/db/models';
import type { ProductDTO } from '@/schemas';
import {
  productsDeleteMutationResponseSchema,
  productsDeletePathParamsSchema,
} from '@/schemas/zod';
import type { Request, Response } from 'express';
import { mapperProductDTO } from './mappers';

export const deleteHandler = async (
  req: Request,
  res: Response<ProductDTO>,
) => {
  const { params } = req;
  const { id } = productsDeletePathParamsSchema.parse(params);
  const product = await ProductModel.findByIdAndDelete(id);

  if (!product) return res.status(204).send();

  const productDTO = mapperProductDTO(product);
  const validProductDTO =
    productsDeleteMutationResponseSchema.parse(productDTO);

  return res.send(validProductDTO);
};
