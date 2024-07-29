import { Document, Schema, model } from 'mongoose';

// Create an interface representing a document in MongoDB.
export interface Product extends Document {
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

// Create a Schema corresponding to the document interface.
const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

// Create a Model.
export const ProductModel = model<Product>('Product', productSchema);
