import styles from './styles.module.css';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface BuyAddRemoveButtonsProps {
  primaryText?: string;
  value: number;
  onAddToBasket?: () => void;
  onRemoveFromBasket?: () => void;
}
function BuyAddRemoveButtons({
  primaryText = 'Add to basket'.toUpperCase(),
  value = 0,
  onAddToBasket,
  onRemoveFromBasket,
}: BuyAddRemoveButtonsProps): JSX.Element {
  if (value === 0) return <button>{primaryText}</button>;

  return (
    <div className={styles.buttons}>
      <button onClick={onRemoveFromBasket}>
        {value === 1 ? <Trash2 size={16} /> : <Minus size={16} />}
      </button>
      <span>{value}</span>
      <button onClick={onAddToBasket}>
        <Plus size={16} />
      </button>
    </div>
  );
}

export default BuyAddRemoveButtons;
