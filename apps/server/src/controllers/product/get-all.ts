import { ProductModel } from '@/db/models';
import { mapperProductDTO } from './mappers';
import type { Request, Response } from 'express';
import {
  productsGetAllQueryParamsSchema,
  productsGetAllQueryResponseSchema,
} from '@repo/contract/server/schemas';
import type { PaginatedMeta } from '@repo/contract/types';
import { z } from 'zod';

export const getAllHandler = async (req: Request, res: Response) => {
  const { query } = req;
  const { page, pageSize } = productsGetAllQueryParamsSchema.parse({
    page: z.coerce
      .number()
      .min(1)
      .parse(query.page || 1),
    pageSize: z.coerce
      .number()
      .min(1)
      .max(100)
      .parse(query.pageSize || 10),
  });

  const [total, products = []] = await Promise.all([
    ProductModel.countDocuments(),
    ProductModel.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize),
  ]);

  const totalPages = Math.ceil(total / pageSize);
  const productsDTO = products.map(mapperProductDTO);

  const paginatedMeta: PaginatedMeta = {
    total,
    totalPages,
    page,
    pageSize,
    hasPrevPage: page - 1 > 0,
    hasNextPage: page < totalPages,
  };

  const validProductsDTO = productsGetAllQueryResponseSchema.parse({
    data: productsDTO,
    meta: paginatedMeta,
  });

  return res.status(200).json(validProductsDTO);
};
