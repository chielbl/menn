import styles from './UniqueSellingPoints.module.css';
import { Earth, Percent } from 'lucide-react';
import Markdown from 'react-markdown';

const UNIQUE_SELLING_POINTS = [
  { icon: Percent, text: 'Follow us on socials for **PROMOS** en **ACTIONS**' },
  { icon: Earth, text: '**Green earth** buy on **DISCOUNT**' },
];

function UniqueSellingPoints() {
  return (
    <div className={styles.uniqueSellingPoints}>
      {UNIQUE_SELLING_POINTS.map(({ icon: Icon, text }) => (
        <div key={text} className={styles.usp}>
          <Icon className={styles.icon} />
          <Markdown>{text}</Markdown>
        </div>
      ))}
    </div>
  );
}

export default UniqueSellingPoints;
