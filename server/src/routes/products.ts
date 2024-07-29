import { createProduct, getProducts } from '@/controllers';
import {
  getProductValidation,
  createProductValidation,
} from '@/controllers/product/request-validations';
import express from 'express';

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getProductValidation, getProducts);

router.post('/', createProductValidation, createProduct);

router.delete('/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id} deleted`);
});

router.put('/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id} updated`);
});

export const productRouter = router;
