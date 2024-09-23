import { Logo, UniqueSellingPoints } from '@/shared/components';
import styles from './shop.module.css';
import { ShoppingBasket } from 'lucide-react';
import { CategoryFilter, ProductList } from './_components';

const categories = ['Cookie', 'Drank', 'Gifts'] as const;
export type Category = (typeof categories)[number];

function ShopPage() {
  return (
    <section id="shop_page" className={styles.shopPage}>
      <UniqueSellingPoints />
      <header className={styles.header}>
        <Logo customClassName={styles.logo} />
        <input
          className={styles.search}
          placeholder="Search on product naam..."
        />
        <div className={styles.basket}>
          <ShoppingBasket size={24} />
          <span>99</span>
        </div>
      </header>
      <CategoryFilter />

      {/* PRODUCTLIST*/}
      <ProductList />
    </section>
  );
}

export default ShopPage;
