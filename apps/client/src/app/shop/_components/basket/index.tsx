'use client'

import styles from './styles.module.css';
import { useBasket } from '@/shared/hooks';
import { Minus, Plus, ShoppingBasket, Trash2 } from 'lucide-react';

function Basket() {
  const { items, getTotalItems, getTotalPrice, updateBasket } = useBasket();
  
  return (
    <div className={styles.basket}>
      <ShoppingBasket />
      <span>{getTotalItems()}</span>
      <div className={styles.basketPreview}>
        <div className={styles.basketItems}>
          {items.map((item) => {
            const { product, quantity } = item;
            const { id, name, price } = product;
            return (
              <ul key={id}>
                <li>
                  <p>{name}</p>
                </li>
                <li>
                  <p>€{price}</p>
                </li>
                <li>
                  <p>{quantity}x</p>
                </li>
                <li>
                  <p>€{(price * quantity).toFixed(2)}</p>
                </li>
                <li>
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
                </li>
              </ul>
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
