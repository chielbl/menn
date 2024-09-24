import styles from './styles.module.css';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  customClassName?: string;
}

function Card({ className, children, ...rest }: CardProps): JSX.Element {
  return (
    <div id="card" className={className || styles.card} {...rest}>
      {children}
    </div>
  );
}

function Top({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div id="card-top" {...rest}>
      {children}
    </div>
  );
}

function Middle({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div id="card-middle" {...rest}>
      {children}
    </div>
  );
}

function Bottom({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      id="card-bottom"
      className={className ? className : 'bottom'}
      {...rest}
    >
      {children}
    </div>
  );
}

Card.Top = Top;
Card.Middle = Middle;
Card.Bottom = Bottom;

export default Card;
