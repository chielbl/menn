import { BadRequest } from "../../BadRequest";
import { NotFound } from "../../NotFound";
import { ServerError } from "../../ServerError";
import { ProductCreateOrUpdate } from "../../ProductCreateOrUpdate";
import type { Product } from "../../Product";

 export type ProductsUpdatePathParams = {
    /**
     * @type string
    */
    id: string;
};
/**
 * @description The request has succeeded.
*/
export type ProductsUpdate200 = Product;
/**
 * @description The server could not understand the request due to invalid syntax.
*/
export type ProductsUpdate400 = BadRequest;
/**
 * @description The server cannot find the requested resource.
*/
export type ProductsUpdate404 = NotFound;
/**
 * @description Server error
*/
export type ProductsUpdate500 = ServerError;
export type ProductsUpdateMutationRequest = ProductCreateOrUpdate;
/**
 * @description The request has succeeded.
*/
export type ProductsUpdateMutationResponse = Product;
export type ProductsUpdateMutation = {
    Response: ProductsUpdateMutationResponse;
    Request: ProductsUpdateMutationRequest;
    PathParams: ProductsUpdatePathParams;
    Errors: ProductsUpdate400 | ProductsUpdate404 | ProductsUpdate500;
};