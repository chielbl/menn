import { NotFound } from "../../NotFound";
import { ServerError } from "../../ServerError";
import type { Product } from "../../Product";

 export type ProductsGetPathParams = {
    /**
     * @type string
    */
    id: string;
};
/**
 * @description The request has succeeded.
*/
export type ProductsGet200 = Product;
/**
 * @description The server cannot find the requested resource.
*/
export type ProductsGet404 = NotFound;
/**
 * @description Server error
*/
export type ProductsGet500 = ServerError;
/**
 * @description The request has succeeded.
*/
export type ProductsGetQueryResponse = Product;
export type ProductsGetQuery = {
    Response: ProductsGetQueryResponse;
    PathParams: ProductsGetPathParams;
    Errors: ProductsGet404 | ProductsGet500;
};