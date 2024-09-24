import { Logo, UniqueSellingPoints } from '@/shared/components';
import styles from './shop.module.css';
import { ShoppingBasket } from 'lucide-react';
import { CategoryFilter, ProductList } from './_components';

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
          <ShoppingBasket />
          <span>99</span>
        </div>
      </header>
      <CategoryFilter />
      <ProductList />
    </section>
  );
}

export default ShopPage;
