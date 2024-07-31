import { ProductModel } from '@/models';
import { mapperProductDTO } from './mappers';
import type { ProductDTO } from './types';
import type { Request, Response } from 'express';

type ResProducts =
  | { data: ProductDTO[] }
  | { data: ProductDTO }
  | { error: string };

export const getProducts = async (req: Request, res: Response<ResProducts>) => {
  const { id } = req.params;

  // If the id is present, we will return a single product
  if (id) {
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    return res.status(200).json({ data: mapperProductDTO(product) });
  }

  // If the id is not present, we will return all products
  const products = await ProductModel.find();

  if (!products) {
    return res.status(404).json({ error: 'Products not found' });
  }

  return res.status(200).json({ data: products.map(mapperProductDTO) });
};
