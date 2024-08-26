import { z } from "zod";
import { productSchema } from "./productSchema";
import { badRequestSchema } from "./badRequestSchema";
import { notFoundSchema } from "./notFoundSchema";
import { serverErrorSchema } from "./serverErrorSchema";
import { productCreateOrUpdateSchema } from "./productCreateOrUpdateSchema";


export const productsUpdatePathParamsSchema = z.object({ "id": z.string() });
/**
 * @description The request has succeeded.
 */
export const productsUpdate200Schema = z.lazy(() => productSchema);
/**
 * @description The server could not understand the request due to invalid syntax.
 */
export const productsUpdate400Schema = z.lazy(() => badRequestSchema);
/**
 * @description The server cannot find the requested resource.
 */
export const productsUpdate404Schema = z.lazy(() => notFoundSchema);
/**
 * @description Server error
 */
export const productsUpdate500Schema = z.lazy(() => serverErrorSchema);

 export const productsUpdateMutationRequestSchema = z.lazy(() => productCreateOrUpdateSchema);
/**
 * @description The request has succeeded.
 */
export const productsUpdateMutationResponseSchema = z.lazy(() => productSchema);