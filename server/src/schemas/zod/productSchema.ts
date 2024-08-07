import { objectIdSchema } from './objectIdSchema';
import { categorySchema } from './categorySchema';
import { availabilityStatusSchema } from './availabilityStatusSchema';
import { reviewSchema } from './reviewSchema';
import { metaSchema } from './metaSchema';
import { z } from 'zod';

export const productSchema = z.object({
  id: z.lazy(() => objectIdSchema),
  name: z.string().min(1).max(20),
  description: z.string().min(1).max(100),
  category: z.lazy(() => categorySchema),
  price: z.number().min(0),
  discountPercentage: z.number().min(0),
  rating: z.number().min(0).max(5),
  stock: z.number().min(0),
  availabilityStatus: z.lazy(() => availabilityStatusSchema),
  thumbnail: z.string(),
  images: z.array(z.string()),
  reviews: z.array(z.lazy(() => reviewSchema)),
  meta: z.lazy(() => metaSchema),
});
