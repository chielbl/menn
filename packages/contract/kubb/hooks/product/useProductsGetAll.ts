import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { ProductsGetAllQueryResponse } from "../../types/controllers/product/ProductsGetAll";

 type ProductsGetAllClient = typeof client<ProductsGetAllQueryResponse, never, never>;
type ProductsGetAll = {
    data: ProductsGetAllQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: ProductsGetAllQueryResponse;
    client: {
        parameters: Partial<Parameters<ProductsGetAllClient>[0]>;
        return: Awaited<ReturnType<ProductsGetAllClient>>;
    };
};
export function productsGetAllQueryOptions<TData = ProductsGetAll["response"]>(options: ProductsGetAll["client"]["parameters"] = {}): SWRConfiguration<TData, ProductsGetAll["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, ProductsGetAll["error"]>({
                method: "get",
                url: `/api/products`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @link /api/products
 */
export function useProductsGetAll<TData = ProductsGetAll["response"]>(options?: {
    query?: SWRConfiguration<TData, ProductsGetAll["error"]>;
    client?: ProductsGetAll["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, ProductsGetAll["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/api/products`;
    const query = useSWR<TData, ProductsGetAll["error"], typeof url | null>(shouldFetch ? url : null, {
        ...productsGetAllQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}