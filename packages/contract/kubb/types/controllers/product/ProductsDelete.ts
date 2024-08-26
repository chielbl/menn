import { ServerError } from "../../ServerError";
import type { Product } from "../../Product";

 export type ProductsDeletePathParams = {
    /**
     * @type string
    */
    id: string;
};
/**
 * @description The request has succeeded.
*/
export type ProductsDelete200 = Product;
/**
 * @description There is no content to send for this request, but the headers may be useful.
*/
export type ProductsDelete204 = any;
/**
 * @description Server error
*/
export type ProductsDelete500 = ServerError;
/**
 * @description The request has succeeded.
*/
export type ProductsDeleteMutationResponse = Product;
export type ProductsDeleteMutation = {
    Response: ProductsDeleteMutationResponse;
    PathParams: ProductsDeletePathParams;
    Errors: ProductsDelete500;
};