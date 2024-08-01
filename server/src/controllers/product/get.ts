import { ProductModel } from '@/models';
import { mapperProductDTO } from './mappers';
import type { ProductDTO } from './types';
import type { Request, Response } from 'express';
import { validateRequestParams } from 'zod-express-middleware';
import { z } from 'zod';

export const getValidator = validateRequestParams(
  z.object({
    id: z.string(),
  }),
);

type ResProducts = { data: ProductDTO } | { error: string };

export const getHandler = async (req: Request, res: Response<ResProducts>) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  const product = await ProductModel.findById(id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  return res.status(200).json({ data: mapperProductDTO(product) });
};
