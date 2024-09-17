import { Logo, UniqueSellingPoints } from '@/shared/components';
import styles from './shop.module.css';
import { Earth, Percent, ShoppingBasket } from 'lucide-react';
import { UniqueSellingPoint } from '@/shared/components/unique-selling-points/types';

const UNIQUE_SELLING_POINTS: Array<UniqueSellingPoint> = [
  { icon: Percent, text: 'Follow us on socials for **PROMOS** en **ACTIONS**' },
  { icon: Earth, text: '**Green earth** buy on **DISCOUNT**' },
];

function ShopPage() {
  return (
    <section id="shop_page" className={styles.shopPage}>
      <UniqueSellingPoints
        className={styles.uniqueSellingPoints}
        uniqueSellingPoints={UNIQUE_SELLING_POINTS}
      />
      <header className={styles.header}>
        <Logo className={styles.logo} />
        <input
          className={styles.search}
          placeholder="Search on product naam..."
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
