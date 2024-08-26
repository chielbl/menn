import { BadRequest } from "../../BadRequest";
import { ServerError } from "../../ServerError";
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
 * @description Server error
*/
export type ProductsCreate500 = ServerError;
export type ProductsCreateMutationRequest = ProductCreate;
/**
 * @description The request has succeeded.
*/
export type ProductsCreateMutationResponse = Product;
export type ProductsCreateMutation = {
    Response: ProductsCreateMutationResponse;
    Request: ProductsCreateMutationRequest;
    Errors: ProductsCreate400 | ProductsCreate500;
};