import * as product from '@/controllers/product';
import express from 'express';

const router = express.Router();

router.get('/', product.getAllHandler);
router.get('/:id', product.getHandler);
router.post('/', product.createHandler);
router.delete('/:id', product.deleteHandler);
router.put('/:id', product.updateHandler);

export const productRouter = router;
