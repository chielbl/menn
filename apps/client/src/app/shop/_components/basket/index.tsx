'use client';

import styles from './styles.module.css';
import { useBasket } from '@/shared/hooks';
import { Minus, Plus, ShoppingBasket, Trash2 } from 'lucide-react';
import Link from 'next/link';

function Basket() {
  const { items, getTotalItems, getTotalPrice, updateBasket } = useBasket();

  return (
    <div className={styles.basket}>
      <Link href="/checkout">
        <ShoppingBasket />
      </Link>
      <span>{getTotalItems()}</span>
      <div className={styles.basketPreview}>
        <div className={styles.items}>
          {items.map((item) => {
            const { product, quantity } = item;
            const { id, name, price } = product;
            return (
              <div key={id} className={styles.item}>
                <p>{name}</p>
                <p>€{price}</p>
                <p>{quantity}x</p>
                <p>€{(price * quantity).toFixed(2)}</p>
                <div className={styles.itemButtons}>
                  <button onClick={() => updateBasket(product, quantity + 1)}>
                    <Plus size={12} />
                  </button>
                  <button onClick={() => updateBasket(product, quantity - 1)}>
                    {quantity === 1 ? (
                      <Trash2 size={12} />
                    ) : (
                      <Minus size={12} />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.basketTotal}>
          <p>Total:</p>
          <p>€{getTotalPrice()}</p>
        </div>
      </div>
    </div>
  );
}

export default Basket;
