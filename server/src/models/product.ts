import { categoryEnum, type ProductCreate } from '@/schemas';
import { Document, Schema, model } from 'mongoose';
import productCreateJSON from '@/schemas/schemas/ProductCreate.json';

// Create an interface representing a document in MongoDB.
// interface Product extends Document, ProductCreate {
//   // name: string;
//   // description: string;
//   // category: string;
//   // image: string;
//   // price: number;
// }

type Product = Document & ProductCreate;

// Create a Schema corresponding to the document interface.
// const productSchema = new Schema<Product>({
//   name: { type: String, required: true, example: 'Product Name' },
//   description: { type: String, required: true },
//   category: { type: String, enum: categoryEnum, required: true },
//   price: { type: Number, required: true },
// });

const productSchema = new Schema<Product>({
  name: {
    type: 'string',
    example: 'Original Cookie',
    maxLength: 20,
    minLength: 1,
  },
  description: {
    type: 'string',
    example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    maxLength: 100,
    minLength: 1,
  },
  category: {
    type: 'string',
    example: 'Cookie',
    enum: ['Cookie'],
    'x-readme-ref-name': 'Category',
  },
  price: { type: 'number', example: 9.99, minimum: 0 },
  discountPercentage: { type: 'number', example: 0, minimum: 0 },
  rating: { type: 'number', example: 0, maximum: 5, minimum: 0 },
  stock: { type: 'number', example: 0, minimum: 0 },
  availabilityStatus: {
    type: 'string',
    example: 'Low Stock',
    enum: ['In Stock', 'Low Stock', 'Out of Stock'],
    'x-readme-ref-name': 'AvailabilityStatus',
  },
  thumbnail: { type: 'string' },
  images: { type: 'array', items: { type: 'string' } },
  reviews: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        rating: {
          type: 'number',
          example: 1,
          maximum: 5,
          minimum: 1,
        },
        comment: {
          type: 'string',
          example: 'Very unhappy with my purchase!',
          maxLength: 100,
          minLength: 1,
        },
        date: { type: 'string', format: 'date-time' },
        reviewerName: { type: 'string', example: 'John Doe' },
        reviewerEmail: { type: 'string', example: 'john.doe@test.com' },
      },
      required: ['rating', 'comment', 'date', 'reviewerName', 'reviewerEmail'],
      'x-readme-ref-name': 'Review',
    },
  },
});
// const productSchema = new Schema<Product>(productCreateJSON.properties);

// Create a Model.
export const ProductModel = model<Product>('Product', productSchema);
