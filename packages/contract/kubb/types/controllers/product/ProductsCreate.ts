import { BadRequest } from "../../BadRequest";
import { Error } from "../../Error";
import { ProductCreate } from "../../ProductCreate";
import type { Product } from "../../Product";

 /**
 * @description The request has succeeded.
*/
export type ProductsCreate200 = Product;
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
export type ProductsCreateMutationResponse = Product;
export type ProductsCreateMutation = {
    Response: ProductsCreateMutationResponse;
    Request: ProductsCreateMutationRequest;
    Errors: ProductsCreate400;
};