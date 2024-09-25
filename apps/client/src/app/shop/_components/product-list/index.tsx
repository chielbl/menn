'use client';

import { useProductsGetAll } from '@repo/contract/client/hooks';
import styles from './styles.module.css';
import { Product, Review } from '@repo/contract/types';
import { BuyAddRemoveButtons, Card, Reviews } from '@/shared/components';
import { useSearchParamNavigation } from '@/shared/hooks';
import { useEffect, useState } from 'react';

function filterProducts(
  product: Product,
  values: Record<string, string>,
): boolean {
  for (var key in values) {
    const pKey = (key === 'search' ? 'name' : key) as keyof Product;
    const value = values[key];

    if (
      product[pKey] === undefined ||
      !product[pKey].toString().toLowerCase().includes(value.toLowerCase())
    ) {
      return false;
    }
  }
  return true;
}

function ProductList() {
  const { data, isLoading } = useProductsGetAll();
  const { getSearchParamsValues } = useSearchParamNavigation();
  const productList =
    data?.data.filter((product) =>
      filterProducts(product, getSearchParamsValues()),
    ) || [];

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
        return (
          <Card key={product.id}>
            <Card.Top className={styles.cardTop}>
              <img src={`/${product.thumbnail}`} alt="product image" />
              <span>€ {product.price}</span>
            </Card.Top>
            <Card.Middle className={styles.cardMiddle}>
              <h4>{product.name}</h4>
              <div className={styles.reviews}>
                <Reviews score={calcReviewScore(product.reviews)} />
                <span>{calcReviewScore(product.reviews)}</span>
              </div>
              {/* <p>{product.description}</p> */}
            </Card.Middle>
            <Card.Bottom className={styles.cardBottom}>
              <BuyAddRemoveButtons value={1} />
            </Card.Bottom>
          </Card>
        );
      })}
    </div>
  );
}

export default ProductList;
