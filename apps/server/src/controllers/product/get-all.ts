import { ProductModel } from '@/db/models';
import { mapperProductDTO } from './mappers';
import type { Request, Response } from 'express';
import { productsGetAllQueryResponseSchema } from '@repo/contract/server/schemas';
import type { PaginatedMeta } from '@repo/contract/types';

export const getAllHandler = async (_req: Request, res: Response) => {
  const products = (await ProductModel.find()) || [];
  const productsDTO = products.map(mapperProductDTO);
  const paginatedMeta: PaginatedMeta = {
    page: 1,
    pageSize: 10,
    prevPage: 0,
    nextPage: 2,
    totalPages: 5,
    total: productsDTO.length,
  };
  console.log({ data: productsDTO, meta: paginatedMeta });
  const validProductsDTO = productsGetAllQueryResponseSchema.parse({
    data: productsDTO,
    meta: paginatedMeta,
  });
  console.log('🚀 ~ getAllHandler ~ validProductsDTO:', validProductsDTO);

  return res.status(200).json(validProductsDTO);
};
