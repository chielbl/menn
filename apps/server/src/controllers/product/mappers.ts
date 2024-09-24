import type { Product } from '@/db/models';
import type { Product as ProductDTO } from '@repo/contract/types';

export const mapperProductDTO = (product: Product): ProductDTO => {
  const {
    _id,
    name,
    description,
    category,
    price,
    thumbnail,
    images,
    reviews,
    createdAt,
    updatedAt,
  } = product.toJSON();
  return {
    id: _id.toString(),
    name,
    description,
    category,
    price,
    discountPercentage: 0,
    stock: 0,
    availabilityStatus: 'Out of Stock',
    thumbnail,
    images: images,
    reviews: reviews,
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
  };
};
