import { ProductModel } from '@/db/models';
import { mapperProductDTO } from './mappers';
import type { Request, Response } from 'express';
import {
  productsGetAllQueryParamsSchema,
  productsGetAllQueryResponseSchema,
} from '@repo/contract/server/schemas';
import type { PaginatedMeta } from '@repo/contract/types';

const PAGE_SIZE = 2;

export const getAllHandler = async (req: Request, res: Response) => {
  const { query } = req;
  const { page: pageStr, pageSize: pageSizeStr } =
    productsGetAllQueryParamsSchema.parse(query);
  const page = pageStr ? +pageStr : 1;
  const pageSize = pageSizeStr ? +pageSizeStr : PAGE_SIZE;
  const total = await ProductModel.countDocuments();
  const totalPages = Math.ceil(total / PAGE_SIZE);

  const productsDTO =
    (
      await ProductModel.find()
        .skip((page - 1) * PAGE_SIZE)
        .limit(pageSize)
    ).map(mapperProductDTO) || [];

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
