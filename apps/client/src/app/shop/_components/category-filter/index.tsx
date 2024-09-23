'use client';

import styles from './styles.module.css';
import { Cookie, Gift, CupSoda } from 'lucide-react';
import { categories, type Category } from './types';
import Link from 'next/link';
import { useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const categoryIcons: Record<Category, React.ReactNode> = {
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

  return (
    <ul className={customClassName || styles.categoryFilter}>
      {categories.map((category) => (
        <li key={category}>
          <Link
            href={
              category !== activeCategory
                ? pathname + '?' + createQueryString('category', category)
                : pathname
            }
            className={category === activeCategory ? styles.active : ''}
          >
            {categoryIcons[category]}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryFilter;
