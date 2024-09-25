import styles from './styles.module.css';
import { Star, StarHalf } from 'lucide-react';

interface ReviewsProps {
  score: number;
}

function Reviews({ score = 0 }: ReviewsProps): JSX.Element {
  return (
    <div className={styles.reviews}>
      {Array.from({ length: 5 }, (_, i) => {
        if (score === 0) return <Star key={i} size={16} />;
        if (score - i >= 1)
          return <Star key={i} className={styles.filled} size={16} />;
        if (score - i >= 0.5) return <StarHalf key={i} className={styles.filled} size={16} />;
        // return <Star key={i} />;
      })}
    </div>
  );
}

export default Reviews;
