import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from products');
});

router.get('/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id}`);
});

router.post('/', (req, res) => {
  res.send('Product created');
});

router.delete('/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id} deleted`);
});

router.put('/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id} updated`);
});

export const productRouter = router;
