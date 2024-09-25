import { UniqueSellingPoints } from '@/shared/components';
import styles from './shop.module.css';
import { CategoryFilter, Header, ProductList } from './_components';

function ShopPage() {
  return (
    <section id="shop_page" className={styles.shopPage}>
      <UniqueSellingPoints />
      <Header />
      <CategoryFilter />
      <ProductList />
    </section>
  );
}

export default ShopPage;
