import { z } from "zod";
import { productSchema } from "./productSchema";
import { badRequestSchema } from "./badRequestSchema";
import { errorSchema } from "./errorSchema";
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
 * @description An unexpected error response.
 */
export const productsUpdateErrorSchema = z.lazy(() => errorSchema);

 export const productsUpdateMutationRequestSchema = z.lazy(() => productCreateOrUpdateSchema);
/**
 * @description The request has succeeded.
 */
export const productsUpdateMutationResponseSchema = z.lazy(() => productSchema);