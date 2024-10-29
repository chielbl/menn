import styles from './shop.module.css';
import { Header, ProductList } from './_components';

function ShopPage() {
  return (
    <section id="shop_page" className={styles.shopPage}>
      <Header />
      <ProductList />
    </section>
  );
}

export default ShopPage;
