import styles from './CategoryFilter.module.css';
import { Cookie, Gift, Glasses } from 'lucide-react';

const categories = ['Koekjes', 'Dranken', 'Cadeaus'] as const;
export type Category = (typeof categories)[number];

function Filter() {
  const getIcon = (category: Category) => {
    switch (category) {
      case 'Dranken':
        return <Glasses />;
      case 'Cadeaus':
        return <Gift />;
      default:
        return <Cookie />;
    }
  };

  return (
    <ul className={styles.categoryFilter}>
      {categories.map((category) => (
        <li
          key={category}
          className={clsx(
            styles.category,
            category === selectedCategory && styles.active,
          )}
        >
          <Link
            href={{ query: { category: category } }}
            className={styles.link}
          >
            {getIcon(category)} {category}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Filter;
