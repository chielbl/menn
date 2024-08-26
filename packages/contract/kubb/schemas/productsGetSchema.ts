import { z } from "zod";
import { productSchema } from "./productSchema";
import { notFoundSchema } from "./notFoundSchema";
import { serverErrorSchema } from "./serverErrorSchema";


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
 * @description Server error
 */
export const productsGet500Schema = z.lazy(() => serverErrorSchema);
/**
 * @description The request has succeeded.
 */
export const productsGetQueryResponseSchema = z.lazy(() => productSchema);