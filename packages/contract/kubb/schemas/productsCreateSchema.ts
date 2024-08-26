import { z } from "zod";
import { productSchema } from "./productSchema";
import { badRequestSchema } from "./badRequestSchema";
import { serverErrorSchema } from "./serverErrorSchema";
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
 * @description Server error
 */
export const productsCreate500Schema = z.lazy(() => serverErrorSchema);

 export const productsCreateMutationRequestSchema = z.lazy(() => productCreateSchema);
/**
 * @description The request has succeeded.
 */
export const productsCreateMutationResponseSchema = z.lazy(() => productSchema);