import { ProductModel, type Product } from '@/db/models';
import type { ProductDTO } from '@/schemas';
import {
  productsUpdateMutationRequestSchema,
  productsUpdateMutationResponseSchema,
  productsUpdatePathParamsSchema,
} from '@/schemas/zod';
import { NotFound } from '@/shared';
import type { Request, Response } from 'express';
import { mapperProductDTO } from './mappers';

export const updateHandler = async (
  req: Request,
  res: Response<ProductDTO>,
) => {
  const { params, body } = req;
  const { id } = productsUpdatePathParamsSchema.parse(params);
  const validData = productsUpdateMutationRequestSchema.parse(body);
  const product = await ProductModel.findOneAndUpdate({ _id: id }, validData, {
    new: true,
  });

  if (!product) throw new NotFound('Product not found');

  const productDTO = mapperProductDTO(product);
  const validProductDTO =
    productsUpdateMutationResponseSchema.parse(productDTO);

  return res.status(200).json(validProductDTO);
};
