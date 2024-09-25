'use client';

import styles from './styles.module.css';
import Logo from '@/shared/components/logo';
import { useDebounce, useSearchParamNavigation } from '@/shared/hooks';
import { ShoppingBasket } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

function Header() {
  const { getValue, updateRouterUrl } = useSearchParamNavigation();
  const { debounce } = useDebounce();
  const [search, setSearch] = useState(getValue('search'));

  const handlerSearchParamOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;

    setSearch(value);
    debounce(() => updateRouterUrl('search', value));
  };

  return (
    <header className={styles.header}>
      <Logo customClassName={styles.logo} />
      <input
        type="text"
        className={styles.search}
        value={search}
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
