import styles from './shop.module.css';
import { ProductList } from './_components';

function ShopPage() {
  return (
    <section id="shop-page" className={styles.shopPage}>
      <ProductList />
    </section>
  );
}

export default ShopPage;
