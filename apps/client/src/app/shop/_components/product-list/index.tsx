import styles from './styles.module.css';

function ProductList() {
  return (
    <div className={styles.productList}>
      <article className={styles.product}>
        <div className={styles.top}>
          <img src="" alt="product image" />
          <span>€ 0,00</span>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h3>[Product name]</h3>
            <span>[Review]</span>
          </div>
          <p>
            [Product descripton] Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Delectus minus obcaecati aliquam accusantium
            tempora quas id sint, nobis corporis, amet saepe fuga ullam nostrum
            numquam, excepturi animi quam minima? Rem odio consectetur corporis
            minus iure accusantium. Adipisci sint laborum voluptate, at sunt
            architecto, laboriosam explicabo, excepturi neque facere eaque!
            Neque!
          </p>
        </div>
        <button>Add to basket</button>
      </article>
    </div>
  );
}

export default ProductList;
