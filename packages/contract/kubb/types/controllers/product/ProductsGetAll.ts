import { ServerError } from "../../ServerError";
import type { PaginatedMeta } from "../../PaginatedMeta";
import type { Product } from "../../Product";

 export type ProductsGetAllQueryParams = {
    /**
     * @type integer
    */
    page: number;
    /**
     * @type integer
    */
    pageSize: number;
};
/**
 * @description The request has succeeded.
*/
export type ProductsGetAll200 = {
    meta: PaginatedMeta;
    /**
     * @type array
    */
    data: Product[];
};
/**
 * @description Server error
*/
export type ProductsGetAll500 = ServerError;
/**
 * @description The request has succeeded.
*/
export type ProductsGetAllQueryResponse = {
    meta: PaginatedMeta;
    /**
     * @type array
    */
    data: Product[];
};
export type ProductsGetAllQuery = {
    Response: ProductsGetAllQueryResponse;
    QueryParams: ProductsGetAllQueryParams;
    Errors: ProductsGetAll500;
};