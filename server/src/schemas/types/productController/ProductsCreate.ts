import { BadRequest } from "../BadRequest";
import { Error } from "../Error";
import { ProductCreate } from "../ProductCreate";
import type { ProductDTO } from "../ProductDTO";

 /**
 * @description The request has succeeded.
*/
export type ProductsCreate200 = ProductDTO;
/**
 * @description The server could not understand the request due to invalid syntax.
*/
export type ProductsCreate400 = BadRequest;
/**
 * @description An unexpected error response.
*/
export type ProductsCreateError = Error;
export type ProductsCreateMutationRequest = ProductCreate;
/**
 * @description The request has succeeded.
*/
export type ProductsCreateMutationResponse = ProductDTO;
export type ProductsCreateMutation = {
    Response: ProductsCreateMutationResponse;
    Request: ProductsCreateMutationRequest;
    Errors: ProductsCreate400;
};