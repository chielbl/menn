import { NotFound } from "../NotFound";
import { Error } from "../Error";
import type { ProductDTO } from "../ProductDTO";

 export type ProductsDeletePathParams = {
    /**
     * @type string
    */
    id: string;
};
/**
 * @description The request has succeeded.
*/
export type ProductsDelete200 = ProductDTO;
/**
 * @description The server cannot find the requested resource.
*/
export type ProductsDelete404 = NotFound;
/**
 * @description An unexpected error response.
*/
export type ProductsDeleteError = Error;
/**
 * @description The request has succeeded.
*/
export type ProductsDeleteMutationResponse = ProductDTO;
export type ProductsDeleteMutation = {
    Response: ProductsDeleteMutationResponse;
    PathParams: ProductsDeletePathParams;
    Errors: ProductsDelete404;
};