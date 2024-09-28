'use client';

import { useProductsGetAll } from '@repo/contract/client/hooks';
import styles from './styles.module.css';
import { Product, Review } from '@repo/contract/types';
import { BuyAddRemoveButtons, Card, Reviews } from '@/shared/components';
import { useBasket, useSearchParamNavigation } from '@/shared/hooks';

function ProductList() {
  const { data, isLoading } = useProductsGetAll();
  const { filterOnSearchParamsQueryString } = useSearchParamNavigation();
  const { getProductQuantity, updateBasket } = useBasket();
  const products = data?.data || [];
  const productList = products.filter((product) =>
    filterOnSearchParamsQueryString<Product>(product),
  );

  if (isLoading) return <div>Loading...</div>;
  if (!isLoading && !productList.length) return <div>No data</div>;

  const calcReviewScore = (reviews: Review[]): number => {
    if (reviews.length === 0) return 0;

    const totalScore = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageScore = totalScore / reviews.length;

    return Number(averageScore.toFixed(1));
  };

  return (
    <div className={styles.productList}>
      {productList.map((product) => {
        const { id, thumbnail, name, description, price, reviews } = product;
        const quantity = getProductQuantity(product);

        return (
          <Card key={id}>
            <Card.Top className={styles.cardTop}>
              <img src={`/${thumbnail}`} alt="product image" />
              <span>€ {price}</span>
            </Card.Top>
            <Card.Middle className={styles.cardMiddle}>
              <h4>{name}</h4>
              <div className={styles.reviews}>
                <Reviews score={calcReviewScore(reviews)} />
                <span>{calcReviewScore(reviews)}</span>
              </div>
              <p>{description}</p>
            </Card.Middle>
            <Card.Bottom className={styles.cardBottom}>
              <BuyAddRemoveButtons
                value={quantity}
                onAdd={() => updateBasket(product, quantity + 1)}
                onRemove={() => updateBasket(product, quantity - 1)}
              />
            </Card.Bottom>
          </Card>
        );
      })}
    </div>
  );
}

export default ProductList;
