import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { ProductsCreateMutationRequest, ProductsCreateMutationResponse, ProductsCreate400 } from "../../types/controllers/product/ProductsCreate";

 type ProductsCreateClient = typeof client<ProductsCreateMutationResponse, ProductsCreate400, ProductsCreateMutationRequest>;
type ProductsCreate = {
    data: ProductsCreateMutationResponse;
    error: ProductsCreate400;
    request: ProductsCreateMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: ProductsCreateMutationResponse;
    client: {
        parameters: Partial<Parameters<ProductsCreateClient>[0]>;
        return: Awaited<ReturnType<ProductsCreateClient>>;
    };
};
/**
 * @link /api/products
 */
export function useProductsCreate(options?: {
    mutation?: SWRMutationConfiguration<ProductsCreate["response"], ProductsCreate["error"]>;
    client?: ProductsCreate["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<ProductsCreate["response"], ProductsCreate["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/api/products` as const;
    return useSWRMutation<ProductsCreate["response"], ProductsCreate["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<ProductsCreate["data"], ProductsCreate["error"], ProductsCreate["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}