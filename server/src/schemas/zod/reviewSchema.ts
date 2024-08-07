import { z } from "zod";


export const reviewSchema = z.object({ "rating": z.number().min(1).max(5), "comment": z.string().min(1).max(100), "date": z.string().datetime(), "reviewerName": z.string(), "reviewerEmail": z.string() });