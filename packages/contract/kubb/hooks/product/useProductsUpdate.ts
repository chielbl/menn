import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { ProductsUpdateMutationRequest, ProductsUpdateMutationResponse, ProductsUpdatePathParams, ProductsUpdate400 } from "../../types/controllers/product/ProductsUpdate";

 type ProductsUpdateClient = typeof client<ProductsUpdateMutationResponse, ProductsUpdate400, ProductsUpdateMutationRequest>;
type ProductsUpdate = {
    data: ProductsUpdateMutationResponse;
    error: ProductsUpdate400;
    request: ProductsUpdateMutationRequest;
    pathParams: ProductsUpdatePathParams;
    queryParams: never;
    headerParams: never;
    response: ProductsUpdateMutationResponse;
    client: {
        parameters: Partial<Parameters<ProductsUpdateClient>[0]>;
        return: Awaited<ReturnType<ProductsUpdateClient>>;
    };
};
/**
 * @link /api/products/:id
 */
export function useProductsUpdate(id: ProductsUpdatePathParams["id"], options?: {
    mutation?: SWRMutationConfiguration<ProductsUpdate["response"], ProductsUpdate["error"]>;
    client?: ProductsUpdate["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<ProductsUpdate["response"], ProductsUpdate["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/api/products/${id}` as const;
    return useSWRMutation<ProductsUpdate["response"], ProductsUpdate["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<ProductsUpdate["data"], ProductsUpdate["error"], ProductsUpdate["request"]>({
            method: "put",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}