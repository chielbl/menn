import { ProductModel } from '@/db/models';
import { mapperProductDTO } from './mappers';
import type { Request, Response } from 'express';
import { NotFound } from '@/shared';
import {
  type Product as ProductDTO,
  productsGetPathParamsSchema,
  productsGetQueryResponseSchema,
} from '@repo/contract';

export const getHandler = async (req: Request, res: Response<ProductDTO>) => {
  const { params } = req;
  const { id } = productsGetPathParamsSchema.parse(params);
  const product = await ProductModel.findById(id);

  if (!product) throw new NotFound('Product not found');

  const productDTO = mapperProductDTO(product);
  const validProductDto = productsGetQueryResponseSchema.parse(productDTO);

  return res.status(200).json(validProductDto);
};
