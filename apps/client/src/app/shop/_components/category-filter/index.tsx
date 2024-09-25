'use client';

import styles from './styles.module.css';
import { Cookie, Gift, CupSoda } from 'lucide-react';
import { categories, type Category } from './types';
import Link from 'next/link';
import { useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useSearchParamNavigation } from '@/shared/hooks';

const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
  cookie: <Cookie />,
  drank: <CupSoda />,
  gifts: <Gift />,
};

interface CategoryFilterProps {
  customClassName?: string;
}

function CategoryFilter({ customClassName }: CategoryFilterProps): JSX.Element {
  const { getNavigationLink } = useSearchParamNavigation();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category');

  return (
    <ul className={customClassName || styles.categoryFilter}>
      {categories.map((category) => (
        <li key={category}>
          <Link
            href={getNavigationLink('category', category)}
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
