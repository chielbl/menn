import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type ProductDTO = {
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
};

// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema<ProductDTO>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

// 3. Create a Model.
export const Product = model<ProductDTO>('Product', productSchema);
