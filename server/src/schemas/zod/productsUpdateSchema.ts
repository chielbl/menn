import { z } from "zod";
import { productSchema } from "./productSchema";
import { badRequestSchema } from "./badRequestSchema";
import { errorSchema } from "./errorSchema";


export const productsUpdatePathParamsSchema = z.object({ "id": z.number() });
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

 export const productsUpdateMutationRequestSchema = z.lazy(() => productSchema).and(z.object({ meta: z.never() }));
/**
 * @description The request has succeeded.
 */
export const productsUpdateMutationResponseSchema = z.lazy(() => productSchema);