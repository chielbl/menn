import { ProductModel } from '@/db/models';
import { mapperProductDTO } from './mappers';
import type { Request, Response } from 'express';
import { NotFound } from '@/shared';
import {
  type Product as ProductDTO,
  productsGetAllQueryResponseSchema,
} from '@repo/contract';

export const getAllHandler = async (
  _req: Request,
  res: Response<ProductDTO[]>,
) => {
  const products = await ProductModel.find();

  // TODO: [Peter] Don't throw an error if no products are found, just return an empty array
  if (!products.length) throw new NotFound('No products found');

  const productsDTO = products.map(mapperProductDTO);
  const validProductsDTO = productsGetAllQueryResponseSchema.parse(productsDTO);

  return res.status(200).json(validProductsDTO);
};
