import { z } from "zod";
import { productSchema } from "./productSchema";
import { errorSchema } from "./errorSchema";


export const productsDeletePathParamsSchema = z.object({ "id": z.string() });
/**
 * @description The request has succeeded.
 */
export const productsDelete200Schema = z.lazy(() => productSchema);
/**
 * @description There is no content to send for this request, but the headers may be useful.
 */
export const productsDelete204Schema = z.any();
/**
 * @description An unexpected error response.
 */
export const productsDeleteErrorSchema = z.lazy(() => errorSchema);
/**
 * @description The request has succeeded.
 */
export const productsDeleteMutationResponseSchema = z.lazy(() => productSchema);