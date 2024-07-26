import type { ProductDTO, TProduct } from '@/models';
import type { Document } from 'mongoose';

export const mapperProductDTO = (
  product: Document<unknown, unknown, TProduct>,
): ProductDTO => {
  const { _id, ...rest } = product.toObject();
  return { id: _id.toString(), ...rest };
};
