import { useCallback } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export function useSearchParamNavigation() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  //   CREATE
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

  //   GET
  const getSearchParamsUrl = (key: string, value: string) => {
    return `${pathname}?${createSearchParamsQueryString(key, value)}`;
  };
  const getSearchParamsValue = (key: string) => searchParams.get(key) || '';
  const getSearchParamsValues = () => {
    const values: Record<string, string> = {};

    searchParams.forEach((value, key) => {
      values[key] = value;
    });

    return values;
  };

  //   UPDATE
  const updateSearchParamsUrl = (key: string, value: string) => {
    const newUrl = getSearchParamsUrl(key, value);
    router.push(newUrl);
  };

  //   UTILS
  const filterOnSearchParamsQueryString = <T>(data: T): boolean => {
    const values = getSearchParamsValues();

    for (var key in values) {
      const pKey = (key === 'search' ? 'name' : key) as keyof T;
      const value = values[key];

      if (
        data[pKey] === undefined ||
        !data[pKey] ||
        !data[pKey].toString().toLowerCase().includes(value.toLowerCase())
      ) {
        return false;
      }
    }
    return true;
  };

  //   RETURN
  return {
    getSearchParamsUrl,
    getSearchParamsValue,
    getSearchParamsValues,
    updateSearchParamsUrl,
    filterOnSearchParamsQueryString,
  };
}
