import { Schema, Types, model } from 'mongoose';

// Create an interface representing a document in MongoDB.
export type TProduct = {
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
};

// Data transfer object
export interface ProductDTO extends TProduct {
  id: string;
}

// Create a Schema corresponding to the document interface.
const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

// Create a Model.
export const Product = model<TProduct>('Product', productSchema);
