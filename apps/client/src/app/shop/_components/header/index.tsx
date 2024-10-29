'use client';

import styles from './styles.module.css';
import Logo from '@/shared/components/logo';
import { useDebounce, useSearchParamNavigation } from '@/shared/hooks';
import { ChangeEvent, useState } from 'react';
import { Basket, CategoryFilter } from '..';
import { UniqueSellingPoints } from '@/shared/components';

function Header() {
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
  );
}

export default Header;
