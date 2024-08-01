import * as product from '@/controllers/product';
import express from 'express';

const router = express.Router();

router.get('/', product.getAllHandler);
router.get('/:id', product.getValidator, product.getHandler);
router.post('/', product.createValidator, product.createHandler);
router.delete('/:id', product.deleteValidator, product.deleteHandler);
router.put('/:id', product.updateValidator, product.updateHandler);

export const productRouter = router;
