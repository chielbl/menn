import { z } from "zod";
import { productSchema } from "./productSchema";
import { notFoundSchema } from "./notFoundSchema";
import { errorSchema } from "./errorSchema";


export const productsGetPathParamsSchema = z.object({ "id": z.string() });
/**
 * @description The request has succeeded.
 */
export const productsGet200Schema = z.lazy(() => productSchema);
/**
 * @description The server cannot find the requested resource.
 */
export const productsGet404Schema = z.lazy(() => notFoundSchema);
/**
 * @description An unexpected error response.
 */
export const productsGetErrorSchema = z.lazy(() => errorSchema);
/**
 * @description The request has succeeded.
 */
export const productsGetQueryResponseSchema = z.lazy(() => productSchema);