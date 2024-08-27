import { z } from "zod";
import { paginatedMetaSchema } from "./paginatedMetaSchema";
import { productSchema } from "./productSchema";
import { serverErrorSchema } from "./serverErrorSchema";


export const productsGetAllQueryParamsSchema = z.object({ "page": z.number(), "pageSize": z.number() });
/**
 * @description The request has succeeded.
 */
export const productsGetAll200Schema = z.object({ "meta": z.lazy(() => paginatedMetaSchema), "data": z.array(z.lazy(() => productSchema)) });
/**
 * @description Server error
 */
export const productsGetAll500Schema = z.lazy(() => serverErrorSchema);
/**
 * @description The request has succeeded.
 */
export const productsGetAllQueryResponseSchema = z.object({ "meta": z.lazy(() => paginatedMetaSchema), "data": z.array(z.lazy(() => productSchema)) });