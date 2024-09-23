'use client';

import styles from './styles.module.css';
import { Cookie, Gift, CupSoda } from 'lucide-react';
import { categories, type Category } from './types';
import Link from 'next/link';
import { useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
  cookie: <Cookie />,
  drank: <CupSoda />,
  gifts: <Gift />,
};

interface CategoryFilterProps {
  customClassName?: string;
}

function CategoryFilter({ customClassName }: CategoryFilterProps): JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category');

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const getCategoryLink = (category: Category) => {
    if (category === activeCategory) {
      return pathname;
    }
    return `${pathname}?${createQueryString('category', category)}`;
  };

  return (
    <ul className={customClassName || styles.categoryFilter}>
      {categories.map((category) => (
        <li key={category}>
          <Link
            href={getCategoryLink(category)}
            className={category === activeCategory ? styles.active : ''}
          >
            {CATEGORY_ICONS[category]}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryFilter;
