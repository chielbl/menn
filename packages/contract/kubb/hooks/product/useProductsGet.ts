import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { ProductsGetQueryResponse, ProductsGetPathParams, ProductsGet404, ProductsGet500 } from "../../types/controllers/product/ProductsGet";

 type ProductsGetClient = typeof client<ProductsGetQueryResponse, ProductsGet404 | ProductsGet500, never>;
type ProductsGet = {
    data: ProductsGetQueryResponse;
    error: ProductsGet404 | ProductsGet500;
    request: never;
    pathParams: ProductsGetPathParams;
    queryParams: never;
    headerParams: never;
    response: ProductsGetQueryResponse;
    client: {
        parameters: Partial<Parameters<ProductsGetClient>[0]>;
        return: Awaited<ReturnType<ProductsGetClient>>;
    };
};
export function productsGetQueryOptions<TData = ProductsGet["response"]>(id: ProductsGetPathParams["id"], options: ProductsGet["client"]["parameters"] = {}): SWRConfiguration<TData, ProductsGet["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, ProductsGet["error"]>({
                method: "get",
                url: `/api/products/${id}`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @link /api/products/:id
 */
export function useProductsGet<TData = ProductsGet["response"]>(id: ProductsGetPathParams["id"], options?: {
    query?: SWRConfiguration<TData, ProductsGet["error"]>;
    client?: ProductsGet["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, ProductsGet["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/api/products/${id}`;
    const query = useSWR<TData, ProductsGet["error"], typeof url | null>(shouldFetch ? url : null, {
        ...productsGetQueryOptions<TData>(id, clientOptions),
        ...queryOptions
    });
    return query;
}