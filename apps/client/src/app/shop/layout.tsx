'use client';

import styles from './layout.module.css';
import Logo from '@/shared/components/logo';
import { useDebounce, useSearchParamNavigation } from '@/shared/hooks';
import { ChangeEvent, useState } from 'react';
import { UniqueSellingPoints } from '@/shared/components';
import { Basket, CategoryFilter } from './_components';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getSearchParamsValue, updateSearchParamsUrl } =
    useSearchParamNavigation();
  const { debounce } = useDebounce();
  const [searchValue, setSearchValue] = useState(
    getSearchParamsValue('search'),
  );

  const handlerSearchParamOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;

    setSearchValue(value);
    debounce(() => updateSearchParamsUrl('search', value), 200);
  };

  return (
    <main>
      <header className={styles.header}>
        <UniqueSellingPoints />
        <div>
          <Logo customClassName={styles.logo} />
          <input
            type="text"
            className={styles.search}
            value={searchValue}
            placeholder="Search on product name..."
            onChange={handlerSearchParamOnChange}
          />
          <Basket />
        </div>
        <CategoryFilter />
      </header>
      {children}
      <footer className={styles.footer}>&copy; Happy Cookie 2024</footer>
    </main>
  );
}
