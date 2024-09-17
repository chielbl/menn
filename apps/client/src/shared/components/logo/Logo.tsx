interface LogoProps {
  styles: string;
}

function Logo({ styles }: LogoProps) {
  return (
    <div className={styles}>
      <img src="/cookie-logo/happy-cookie.webp" alt="logo" />
      <h3>Happy cookie</h3>
    </div>
  );
}

export default Logo;
