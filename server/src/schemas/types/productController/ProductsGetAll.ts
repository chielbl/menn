import { Error } from "../Error";
import type { ProductDTO } from "../ProductDTO";

 /**
 * @description The request has succeeded.
*/
export type ProductsGetAll200 = ProductDTO[];
/**
 * @description An unexpected error response.
*/
export type ProductsGetAllError = Error;
/**
 * @description The request has succeeded.
*/
export type ProductsGetAllQueryResponse = ProductDTO[];
export type ProductsGetAllQuery = {
    Response: ProductsGetAllQueryResponse;
};