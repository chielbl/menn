import { Product } from '@/models';
import type { Request, Response } from 'express';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
