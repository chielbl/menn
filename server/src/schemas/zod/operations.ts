import { productsGetAllQueryResponseSchema } from "./productsGetAllSchema";
import { productsCreateMutationRequestSchema, productsCreateMutationResponseSchema, productsCreate400Schema } from "./productsCreateSchema";
import { productsGetQueryResponseSchema, productsGet404Schema, productsGetPathParamsSchema } from "./productsGetSchema";
import { productsDeleteMutationResponseSchema, productsDeletePathParamsSchema } from "./productsDeleteSchema";
import { productsUpdateMutationRequestSchema, productsUpdateMutationResponseSchema, productsUpdate400Schema, productsUpdatePathParamsSchema } from "./productsUpdateSchema";

 export const operations = { "Products_GetAll": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: productsGetAllQueryResponseSchema,
            default: productsGetAllQueryResponseSchema
        },
        errors: {}
    }, "Products_Create": {
        request: productsCreateMutationRequestSchema,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: productsCreateMutationResponseSchema,
            400: productsCreate400Schema,
            default: productsCreateMutationResponseSchema
        },
        errors: {
            400: productsCreate400Schema
        }
    }, "Products_Get": {
        request: undefined,
        parameters: {
            path: productsGetPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: productsGetQueryResponseSchema,
            404: productsGet404Schema,
            default: productsGetQueryResponseSchema
        },
        errors: {
            404: productsGet404Schema
        }
    }, "Products_Delete": {
        request: undefined,
        parameters: {
            path: productsDeletePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: productsDeleteMutationResponseSchema,
            default: productsDeleteMutationResponseSchema
        },
        errors: {}
    }, "Products_Update": {
        request: productsUpdateMutationRequestSchema,
        parameters: {
            path: productsUpdatePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: productsUpdateMutationResponseSchema,
            400: productsUpdate400Schema,
            default: productsUpdateMutationResponseSchema
        },
        errors: {
            400: productsUpdate400Schema
        }
    } } as const;
export const paths = { "/api/products": {
        get: operations["Products_GetAll"],
        post: operations["Products_Create"]
    }, "/api/products/{id}": {
        get: operations["Products_Get"],
        delete: operations["Products_Delete"],
        put: operations["Products_Update"]
    } } as const;