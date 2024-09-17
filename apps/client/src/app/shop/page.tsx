import styles from './shop.module.css';
import { ShoppingBasket } from 'lucide-react';

export default function ShopPage() {
  return (
    <section id="shop_page" className={styles.shopPage}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="/cookie-logo/happy-cookie.webp" alt="logo" />
          <h3>Happy cookie</h3>
        </div>
        <input className={styles.search} type="text" />
        <div className={styles.basket}>
          <ShoppingBasket size={24} />
          <span>99</span>
        </div>
      </div>
    </section>
  );
}
