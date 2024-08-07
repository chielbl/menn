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

const productSchema = new Schema<Product>(productCreateJSON.properties);

// Create a Model.
export const ProductModel = model<Product>('Product', productSchema);
