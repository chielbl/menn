import { z } from 'zod';
import {
  validateRequestBody,
  validateRequestParams,
} from 'zod-express-middleware';

export const getProductValidation = validateRequestParams(
  z.object({
    id: z.string(),
  }),
);

export const createProductValidation = validateRequestBody(
  z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    price: z.number(),
  }),
);
