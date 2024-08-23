import { Error } from "../../Error";
import type { Product } from "../../Product";

 /**
 * @description The request has succeeded.
*/
export type ProductsGetAll200 = Product[];
/**
 * @description An unexpected error response.
*/
export type ProductsGetAllError = Error;
/**
 * @description The request has succeeded.
*/
export type ProductsGetAllQueryResponse = Product[];
export type ProductsGetAllQuery = {
    Response: ProductsGetAllQueryResponse;
};