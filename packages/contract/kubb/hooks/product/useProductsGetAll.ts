import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { ProductsGetAllQueryResponse, ProductsGetAllQueryParams, ProductsGetAll500 } from "../../types/controllers/product/ProductsGetAll";

 type ProductsGetAllClient = typeof client<ProductsGetAllQueryResponse, ProductsGetAll500, never>;
type ProductsGetAll = {
    data: ProductsGetAllQueryResponse;
    error: ProductsGetAll500;
    request: never;
    pathParams: never;
    queryParams: ProductsGetAllQueryParams;
    headerParams: never;
    response: ProductsGetAllQueryResponse;
    client: {
        parameters: Partial<Parameters<ProductsGetAllClient>[0]>;
        return: Awaited<ReturnType<ProductsGetAllClient>>;
    };
};
export function productsGetAllQueryOptions<TData = ProductsGetAll["response"]>(params?: ProductsGetAll["queryParams"], options: ProductsGetAll["client"]["parameters"] = {}): SWRConfiguration<TData, ProductsGetAll["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, ProductsGetAll["error"]>({
                method: "get",
                url: `/api/products`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @link /api/products
 */
export function useProductsGetAll<TData = ProductsGetAll["response"]>(params?: ProductsGetAll["queryParams"], options?: {
    query?: SWRConfiguration<TData, ProductsGetAll["error"]>;
    client?: ProductsGetAll["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, ProductsGetAll["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/api/products`;
    const query = useSWR<TData, ProductsGetAll["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...productsGetAllQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}