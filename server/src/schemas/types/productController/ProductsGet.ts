import { NotFound } from "../NotFound";
import { Error } from "../Error";
import type { ProductDTO } from "../ProductDTO";

 export type ProductsGetPathParams = {
    /**
     * @type string
    */
    id: string;
};
/**
 * @description The request has succeeded.
*/
export type ProductsGet200 = ProductDTO;
/**
 * @description The server cannot find the requested resource.
*/
export type ProductsGet404 = NotFound;
/**
 * @description An unexpected error response.
*/
export type ProductsGetError = Error;
/**
 * @description The request has succeeded.
*/
export type ProductsGetQueryResponse = ProductDTO;
export type ProductsGetQuery = {
    Response: ProductsGetQueryResponse;
    PathParams: ProductsGetPathParams;
    Errors: ProductsGet404;
};