import { useCallback } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export function useSearchParamNavigation() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryString = useCallback(
    (key: string, value: string) => {
      const currentParam = searchParams.get(key);
      const params = new URLSearchParams(searchParams.toString());

      if (currentParam === value || !value) params.delete(key);
      else params.set(key, value);

      return params.toString();
    },
    [searchParams],
  );

  const getNavigationLink = (key: string, value: string) => {
    return `${pathname}?${createQueryString(key, value)}`;
  };

  const updateRouterUrl = (key: string, value: string) => {
    const newUrl = getNavigationLink(key, value);
    router.push(newUrl);
  };

  const getValue = (key: string) => searchParams.get(key) || '';
  const getValues = () => {
    const values: Record<string, string> = {};

    searchParams.forEach((value, key) => {
      values[key] = value;
    });

    return values;
  };

  return { getNavigationLink, getValue, getValues, updateRouterUrl };
}
