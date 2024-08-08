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
 * @description There is no content to send for this request, but the headers may be useful.
*/
export type ProductsDelete204 = any;
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
};