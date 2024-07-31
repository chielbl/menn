import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '@/controllers';
import {
  validateCreateProduct,
  validateDeleteProduct,
  validateGetProduct,
  validateUpdateProduct,
} from '@/middleware';
import express from 'express';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', validateGetProduct, getProducts);
router.post('/', validateCreateProduct, createProduct);
router.delete('/:id', validateDeleteProduct, deleteProduct);
router.put('/:id', validateUpdateProduct, updateProduct);

export const productRouter = router;
