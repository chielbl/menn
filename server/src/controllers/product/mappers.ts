import type { Product } from '@/db/models';
import type { ProductDTO } from '@/schemas';

export const mapperProductDTO = (product: Product): ProductDTO => {
  const { _id, name, description, category, price, createdAt, updatedAt } =
    product.toJSON();
  return {
    id: _id.toString(),
    name,
    description,
    category,
    price,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    availabilityStatus: 'Out of Stock',
    thumbnail: 'https://via.placeholder.com/150',
    images: [],
    reviews: [],
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
  };
};
