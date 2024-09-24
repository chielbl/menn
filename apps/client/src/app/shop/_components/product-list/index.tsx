'use client';

import { useProductsGetAll } from '@repo/contract/client/hooks';
import styles from './styles.module.css';
import { Review } from '@repo/contract/types';

function ProductList() {
  const { data, isLoading } = useProductsGetAll();
  console.log('🚀 ~ ProductList ~ data:', data);

  if (isLoading) return <div>Loading...</div>;
  if (!isLoading && !data?.data) return <div>No data</div>;

  const calcReviewScore = (reviews: Review[]): number => {
    // console.log('🚀 ~ calcReviewScore ~ reviews:', reviews);
    if (reviews.length === 0) return 0;

    const totalScore = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageScore = totalScore / reviews.length;

    return Number(averageScore.toFixed(1));
  };

  return (
    <div className={styles.productList}>
      {data?.data.map((product) => {
        return (
          <article key={product.id} className={styles.product}>
            <div className={styles.top}>
              <img src={`/${product.thumbnail}`} alt="product image" />
              <span>€ {product.price}</span>
            </div>
            <div className={styles.content}>
              <div className={styles.heading}>
                <h3>{product.name}</h3>
                <span>{calcReviewScore(product.reviews)}</span>
              </div>
              <p>{product.description}</p>
            </div>
            <button>Add to basket</button>
          </article>
        );
      })}
    </div>
  );
}

export default ProductList;
