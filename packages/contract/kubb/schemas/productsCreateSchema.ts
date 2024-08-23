import { z } from "zod";
import { productSchema } from "./productSchema";
import { badRequestSchema } from "./badRequestSchema";
import { errorSchema } from "./errorSchema";
import { productCreateSchema } from "./productCreateSchema";

 /**
 * @description The request has succeeded.
 */
export const productsCreate200Schema = z.lazy(() => productSchema);
/**
 * @description The server could not understand the request due to invalid syntax.
 */
export const productsCreate400Schema = z.lazy(() => badRequestSchema);
/**
 * @description An unexpected error response.
 */
export const productsCreateErrorSchema = z.lazy(() => errorSchema);

 export const productsCreateMutationRequestSchema = z.lazy(() => productCreateSchema);
/**
 * @description The request has succeeded.
 */
export const productsCreateMutationResponseSchema = z.lazy(() => productSchema);