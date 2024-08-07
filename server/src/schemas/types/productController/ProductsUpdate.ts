import { BadRequest } from "../BadRequest";
import { Error } from "../Error";
import type { ProductDTO } from "../ProductDTO";

 export type ProductsUpdatePathParams = {
    /**
     * @type integer, int32
    */
    id: number;
};
/**
 * @description The request has succeeded.
*/
export type ProductsUpdate200 = ProductDTO;
/**
 * @description The server could not understand the request due to invalid syntax.
*/
export type ProductsUpdate400 = BadRequest;
/**
 * @description An unexpected error response.
*/
export type ProductsUpdateError = Error;
export type ProductsUpdateMutationRequest = Omit<NonNullable<ProductDTO>, "meta">;
/**
 * @description The request has succeeded.
*/
export type ProductsUpdateMutationResponse = ProductDTO;
export type ProductsUpdateMutation = {
    Response: ProductsUpdateMutationResponse;
    Request: ProductsUpdateMutationRequest;
    PathParams: ProductsUpdatePathParams;
    Errors: ProductsUpdate400;
};