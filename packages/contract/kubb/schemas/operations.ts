import { productsGetAllQueryResponseSchema, productsGetAll500Schema, productsGetAllQueryParamsSchema } from "./productsGetAllSchema";
import { productsCreateMutationRequestSchema, productsCreateMutationResponseSchema, productsCreate400Schema, productsCreate500Schema } from "./productsCreateSchema";
import { productsGetQueryResponseSchema, productsGet404Schema, productsGet500Schema, productsGetPathParamsSchema } from "./productsGetSchema";
import { productsDeleteMutationResponseSchema, productsDelete500Schema, productsDeletePathParamsSchema } from "./productsDeleteSchema";
import { productsUpdateMutationRequestSchema, productsUpdateMutationResponseSchema, productsUpdate400Schema, productsUpdate404Schema, productsUpdate500Schema, productsUpdatePathParamsSchema } from "./productsUpdateSchema";

 export const operations = { "Products_GetAll": {
        request: undefined,
        parameters: {
            path: undefined,
            query: productsGetAllQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: productsGetAllQueryResponseSchema,
            500: productsGetAll500Schema,
            default: productsGetAllQueryResponseSchema
        },
        errors: {
            500: productsGetAll500Schema
        }
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
            500: productsCreate500Schema,
            default: productsCreateMutationResponseSchema
        },
        errors: {
            400: productsCreate400Schema,
            500: productsCreate500Schema
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
            500: productsGet500Schema,
            default: productsGetQueryResponseSchema
        },
        errors: {
            404: productsGet404Schema,
            500: productsGet500Schema
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
            500: productsDelete500Schema,
            default: productsDeleteMutationResponseSchema
        },
        errors: {
            500: productsDelete500Schema
        }
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
            404: productsUpdate404Schema,
            500: productsUpdate500Schema,
            default: productsUpdateMutationResponseSchema
        },
        errors: {
            400: productsUpdate400Schema,
            404: productsUpdate404Schema,
            500: productsUpdate500Schema
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