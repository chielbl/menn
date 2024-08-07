import { z } from "zod";
import { productSchema } from "./productSchema";
import { notFoundSchema } from "./notFoundSchema";
import { errorSchema } from "./errorSchema";


export const productsDeletePathParamsSchema = z.object({ "id": z.string() });
/**
 * @description The request has succeeded.
 */
export const productsDelete200Schema = z.lazy(() => productSchema);
/**
 * @description The server cannot find the requested resource.
 */
export const productsDelete404Schema = z.lazy(() => notFoundSchema);
/**
 * @description An unexpected error response.
 */
export const productsDeleteErrorSchema = z.lazy(() => errorSchema);
/**
 * @description The request has succeeded.
 */
export const productsDeleteMutationResponseSchema = z.lazy(() => productSchema);