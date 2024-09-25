'use client';

import styles from './styles.module.css';
import Logo from '@/shared/components/logo';
import { useDebounce, useSearchParamNavigation } from '@/shared/hooks';
import { ShoppingBasket } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

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
    debounce(() => updateSearchParamsUrl('search', value));
  };

  return (
    <header className={styles.header}>
      <Logo customClassName={styles.logo} />
      <input
        type="text"
        className={styles.search}
        value={searchValue}
        placeholder="Search on product name..."
        onChange={handlerSearchParamOnChange}
      />
      <div className={styles.basket}>
        <ShoppingBasket />
        <span>99</span>
      </div>
    </header>
  );
}

export default Header;
