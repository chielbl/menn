import { createProduct, deleteProduct, getProducts } from '@/controllers';
import {
  validateCreateProduct,
  validateDeleteProduct,
  validateGetProduct,
} from '@/middleware';
import express from 'express';

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', validateGetProduct, getProducts);

router.post('/', validateCreateProduct, createProduct);

router.delete('/:id', validateDeleteProduct, deleteProduct);

router.put('/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id} updated`);
});

export const productRouter = router;
