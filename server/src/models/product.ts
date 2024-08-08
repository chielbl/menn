import { categoryEnum } from '@/schemas';
import { Document, Schema, model } from 'mongoose';

// Create an interface representing a document in MongoDB.
export interface Product extends Document {
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

// Create a Schema corresponding to the document interface.
const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: categoryEnum, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create a Model.
export const ProductModel = model<Product>('Product', productSchema);
