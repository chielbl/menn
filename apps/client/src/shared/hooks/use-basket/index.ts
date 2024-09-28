import { getLocalStorage, setLocalStorage } from '@/shared/utils';
import { Product } from '@repo/contract/types';
import { create } from 'zustand';

type State = {
  items: Array<{ product: Product; quantity: number }>;
};

type Action = {
  updateBasket: (product: Product, quantity: number) => void;
  clearBasket: () => void;
};

const basketStore = create<State & Action>((set) => ({
  items: getLocalStorage<State['items']>('basket-items', []),
  updateBasket: (product, quantity) => {
    set((state) => {
      const { items } = state;
      const newBasket = { items };
      const productIndex = items.findIndex(
        (item) => item.product.id === product.id,
      );

      if (productIndex >= 0) {
        newBasket.items[productIndex].quantity = quantity;
      } else {
        newBasket.items = [...items, { product, quantity }];
      }

      newBasket.items = newBasket.items.filter((item) => item.quantity !== 0);
      setLocalStorage('basket-items', newBasket.items);

      return newBasket;
    });
  },
  clearBasket: () => {
    localStorage.removeItem('basket-items');
    localStorage.removeItem('basket-total-items');
    return set({ items: [] });
  },
}));

export function useBasket() {
  const { items, ...actions } = basketStore((store) => store);

  const getProductQuantity = (product: Product) => {
    const item = items.find((item) => item.product.id === product.id);
    return item ? item.quantity : 0;
  };

  const getTotalItems = () => items.length;

  const getTotalPrice = () => {
    return items.reduce(
      (prevValue, curItem) =>
        prevValue + curItem.product.price * curItem.quantity,
      0,
    );
  };

  return {
    state: {
      items,
    },
    actions: {
      getProductQuantity,
      getTotalItems,
      getTotalPrice,
      ...actions,
    },
  };
}
