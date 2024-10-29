import styles from './styles.module.css';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface BuyAddRemoveButtonsProps {
  primaryText?: string;
  value: number;
  onAdd: () => void;
  onRemove: () => void;
}
function BuyAddRemoveButtons({
  primaryText = 'Add to basket'.toUpperCase(),
  value = 0,
  onAdd,
  onRemove,
}: BuyAddRemoveButtonsProps): JSX.Element {
  if (value === 0)
    return (
      <div className={styles.buttons}>
        <button onClick={onAdd}>{primaryText}</button>
      </div>
    );

  return (
    <div className={styles.buttons}>
      <button onClick={onRemove}>
        {value === 1 ? <Trash2 size={16} /> : <Minus size={16} />}
      </button>
      <span>{value}</span>
      <button onClick={onAdd}>
        <Plus size={16} />
      </button>
    </div>
  );
}

export default BuyAddRemoveButtons;
