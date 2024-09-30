import styles from './loading.module.css';
import { Loader } from '@/shared/components';

function Loading() {
  return (
    <section className={styles.loading}>
      <Loader />
    </section>
  );
}

export default Loading;
