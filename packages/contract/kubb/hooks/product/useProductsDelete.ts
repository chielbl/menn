import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { ProductsDeleteMutationResponse, ProductsDeletePathParams, ProductsDelete500 } from "../../types/controllers/product/ProductsDelete";

 type ProductsDeleteClient = typeof client<ProductsDeleteMutationResponse, ProductsDelete500, never>;
type ProductsDelete = {
    data: ProductsDeleteMutationResponse;
    error: ProductsDelete500;
    request: never;
    pathParams: ProductsDeletePathParams;
    queryParams: never;
    headerParams: never;
    response: ProductsDeleteMutationResponse;
    client: {
        parameters: Partial<Parameters<ProductsDeleteClient>[0]>;
        return: Awaited<ReturnType<ProductsDeleteClient>>;
    };
};
/**
 * @link /api/products/:id
 */
export function useProductsDelete(id: ProductsDeletePathParams["id"], options?: {
    mutation?: SWRMutationConfiguration<ProductsDelete["response"], ProductsDelete["error"]>;
    client?: ProductsDelete["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<ProductsDelete["response"], ProductsDelete["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/api/products/${id}` as const;
    return useSWRMutation<ProductsDelete["response"], ProductsDelete["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<ProductsDelete["data"], ProductsDelete["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}