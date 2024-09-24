'use client';

import { useProductsGetAll } from '@repo/contract/client/hooks';
import styles from './styles.module.css';
import { Review } from '@repo/contract/types';
import { Card } from '@/shared/components';

function ProductList() {
  const { data, isLoading } = useProductsGetAll();

  if (isLoading) return <div>Loading...</div>;
  if (!isLoading && !data?.data) return <div>No data</div>;

  const calcReviewScore = (reviews: Review[]): number => {
    if (reviews.length === 0) return 0;

    const totalScore = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageScore = totalScore / reviews.length;

    return Number(averageScore.toFixed(1));
  };

  return (
    <div className={styles.productList}>
      {data?.data.map((product) => {
        return (
          <Card key={product.id}>
            <Card.Top className={styles.cardTop}>
              <img src={`/${product.thumbnail}`} alt="product image" />
              <span>€ {product.price}</span>
            </Card.Top>
            <Card.Middle className={styles.cardMiddle}>
              <div className={styles.heading}>
                <h3>{product.name}</h3>
                <span>{calcReviewScore(product.reviews)}</span>
              </div>
              <p>{product.description}</p>
            </Card.Middle>
            <Card.Bottom className={styles.cardBottom}>
              <button>Add to basket</button>
            </Card.Bottom>
          </Card>
        );
      })}
    </div>
  );
}

export default ProductList;
