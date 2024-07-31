import { z } from 'zod';
import {
  validateRequestBody,
  validateRequestParams,
} from 'zod-express-middleware';

export const validateGetProduct = validateRequestParams(
  z.object({
    id: z.string(),
  }),
);

export const validateCreateProduct = validateRequestBody(
  z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    price: z.number(),
  }),
);

export const validateDeleteProduct = validateRequestParams(
  z.object({
    id: z.string(),
  }),
);
