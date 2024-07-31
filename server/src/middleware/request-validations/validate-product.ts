import { z } from 'zod';
import {
  validateRequest,
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

export const validateUpdateProduct = validateRequest({
  params: z.object({
    id: z.string(),
  }),
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    image: z.string().optional(),
    price: z.number().optional(),
  }),
});
