import {
  availabilityStatusEnum,
  categoryEnum,
  type AvailabilityStatus,
  type Category,
  type Review,
} from '@/schemas';
import { Document, Schema, model } from 'mongoose';

// Create an interface representing a document in MongoDB.
export interface Product extends Document {
  name: string;
  description: string;
  category: Category;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  availabilityStatus: AvailabilityStatus;
  thumbnail: string;
  images: string[];
  reviews: Review[];
  createdAt: Date;
  updatedAt: Date;
}

// Create a Schema corresponding to the document interface.
const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: categoryEnum, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number, required: true },
  rating: { type: Number, required: true },
  stock: { type: Number, required: true },
  availabilityStatus: {
    type: String,
    enum: availabilityStatusEnum,
    required: true,
  },
  thumbnail: { type: String, required: true },
  images: { type: [String], default: [] },
  reviews: { type: [Object], default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create a Model.
export const ProductModel = model<Product>('Product', productSchema);
