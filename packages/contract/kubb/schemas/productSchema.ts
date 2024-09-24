import { objectIdSchema } from "./objectIdSchema";
import { categorySchema } from "./categorySchema";
import { availabilityStatusSchema } from "./availabilityStatusSchema";
import { reviewSchema } from "./reviewSchema";
import { z } from "zod";


export const productSchema = z.object({ "id": z.lazy(() => objectIdSchema), "name": z.string().min(1).max(128), "description": z.string().min(1).max(255), "category": z.lazy(() => categorySchema), "price": z.number().min(0), "discountPercentage": z.number().min(0), "stock": z.number().min(0), "availabilityStatus": z.lazy(() => availabilityStatusSchema), "thumbnail": z.string(), "images": z.array(z.string()), "reviews": z.array(z.lazy(() => reviewSchema)), "createdAt": z.string().datetime().describe("The date & time the resources was created"), "updatedAt": z.string().datetime().describe("The date & time the resources was last updated") });