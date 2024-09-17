import { Logo } from '@/shared/components';
import styles from './shop.module.css';
import { ShoppingBasket } from 'lucide-react';

function ShopPage() {
  return (
    <section id="shop_page" className={styles.shopPage}>
      <UniqueSellingPoints />
      <header className={styles.header}>
        <Logo styles={styles.logo} />
        <input
          className={styles.search}
          placeholder="Zoek op product naam..."
        />
        <div className={styles.basket}>
          <ShoppingBasket size={24} />
          <span>99</span>
        </div>
      </header>
    </section>
  );
}

export default ShopPage;
