import { z } from "zod";
import { productSchema } from "./productSchema";
import { errorSchema } from "./errorSchema";

 /**
 * @description The request has succeeded.
 */
export const productsGetAll200Schema = z.array(z.lazy(() => productSchema));
/**
 * @description An unexpected error response.
 */
export const productsGetAllErrorSchema = z.lazy(() => errorSchema);
/**
 * @description The request has succeeded.
 */
export const productsGetAllQueryResponseSchema = z.array(z.lazy(() => productSchema));