import styles from './styles.module.css';
import { Logo, UniqueSellingPoints } from '@/shared/components';

interface BasePageProps {
  pageName: string;
  children: React.ReactNode;
}
function BasePage({ pageName, children }: BasePageProps): JSX.Element {
  return (
    <section id={`${pageName.toLocaleLowerCase()}-page`}>
      <header className={styles.header}>
        <UniqueSellingPoints />
        <div>
          <Logo customClassName={styles.logo} />
          <h2 className={styles.pageName}>{pageName}</h2>
        </div>
      </header>
      {children}
    </section>
  );
}

export default BasePage;
