import type { Product } from '@/models';
import type { ProductDTO } from './types';

export const mapperProductDTO = (product: Product): ProductDTO => {
  const { _id, name, description, category, image, price } = product.toJSON();
  return { id: _id, name, description, category, image, price };
};
