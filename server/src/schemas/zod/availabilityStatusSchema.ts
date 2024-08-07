import { z } from "zod";


export const availabilityStatusSchema = z.enum(["In Stock", "Low Stock", "Out of Stock"]);