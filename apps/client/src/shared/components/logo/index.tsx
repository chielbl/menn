import styles from './styles.module.css';
import { AnchorHTMLAttributes } from 'react';

interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  customClassName?: string;
}

function Logo({ customClassName, ...rest }: LogoProps) {
  return (
    <a className={customClassName || styles.logo} {...rest}>
      <img src="/cookie-logo/happy-cookie.webp" alt="Happy cookie" />
      <h3>Happy Cookie</h3>
    </a>
  );
}

export default Logo;
