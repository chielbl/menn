import { ProductModel } from '@/db/models';
import { mapperProductDTO } from './mappers';
import type { Request, Response } from 'express';
import type { Product as ProductDTO } from '@repo/contract/types';
import { productsGetAllQueryResponseSchema } from '@repo/contract/server/schemas';

export const getAllHandler = async (
  _req: Request,
  res: Response<ProductDTO[]>,
) => {
  const products = (await ProductModel.find()) || [];
  const productsDTO = products.map(mapperProductDTO);
  const validProductsDTO = productsGetAllQueryResponseSchema.parse(productsDTO);

  return res.status(200).json(validProductsDTO);
};
