import { createProduct } from '@/controllers';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from products');
});

router.get('/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id}`);
});

router.post('/', createProduct);

router.delete('/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id} deleted`);
});

router.put('/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id} updated`);
});

export const productRouter = router;
