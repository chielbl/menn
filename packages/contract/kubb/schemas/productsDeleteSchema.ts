import { z } from "zod";
import { productSchema } from "./productSchema";
import { serverErrorSchema } from "./serverErrorSchema";


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
 * @description Server error
 */
export const productsDelete500Schema = z.lazy(() => serverErrorSchema);
/**
 * @description The request has succeeded.
 */
export const productsDeleteMutationResponseSchema = z.lazy(() => productSchema);