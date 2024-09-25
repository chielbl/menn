import { useCallback } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export function useSearchParamNavigation() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createSearchParamsQueryString = useCallback(
    (key: string, value: string) => {
      const currentParam = searchParams.get(key);
      const params = new URLSearchParams(searchParams.toString());

      if (currentParam === value || !value) params.delete(key);
      else params.set(key, value);

      return params.toString();
    },
    [searchParams],
  );

  const getSearchParamsUrl = (key: string, value: string) => {
    return `${pathname}?${createSearchParamsQueryString(key, value)}`;
  };

  const updateSearchParamsUrl = (key: string, value: string) => {
    const newUrl = getSearchParamsUrl(key, value);
    router.push(newUrl);
  };

  const getSearchParamsValue = (key: string) => searchParams.get(key) || '';
  const getSearchParamsValues = () => {
    const values: Record<string, string> = {};

    searchParams.forEach((value, key) => {
      values[key] = value;
    });

    return values;
  };

  return {
    getSearchParamsUrl,
    getSearchParamsValue,
    getSearchParamsValues,
    updateSearchParamsUrl,
  };
}
