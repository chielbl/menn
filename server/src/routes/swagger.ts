import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import document from '../../swagger/out/openapi.json';

const router = express.Router();

router.use('/doc.json', (_req, res) => res.json(document));
router.use('/', serve, setup(document));

export const swaggerRouter = router;
