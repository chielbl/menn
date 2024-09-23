import styles from './styles.module.css';
import { Earth, Percent } from 'lucide-react';
import Markdown from 'react-markdown';
import { UniqueSellingPoint } from './types';

const UNIQUE_SELLING_POINTS: Array<UniqueSellingPoint> = [
  { icon: Percent, text: 'Follow us on socials for **PROMOS** en **ACTIONS**' },
  { icon: Earth, text: '**Green earth** buy on **DISCOUNT**' },
];

interface UniqueSellingPointsProps {
  customClassName?: string;
}

function UniqueSellingPoints({
  customClassName,
}: UniqueSellingPointsProps): JSX.Element {
  return (
    <ul className={customClassName || styles.uniqueSellingPoints}>
      {UNIQUE_SELLING_POINTS.map(({ icon: Icon, text, itemClick }) => (
        <li key={text} onClick={itemClick}>
          <Icon />
          <Markdown>{text}</Markdown>
        </li>
      ))}
    </ul>
  );
}

export default UniqueSellingPoints;
