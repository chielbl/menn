import styles from './styles.module.css';

interface LoaderProps {
  message?: string;
}
function loader({ message }: LoaderProps) {
  return (
    <div className={styles.loader}>
      <img src="/cookie-logo/angel-cookie.png" />
      <span className={styles.spinner}></span>
      {message && <p>message</p>}
    </div>
  );
}

export default loader;
