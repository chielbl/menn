interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

function Logo({ ...rest }: LogoProps) {
  return (
    <div {...rest}>
      <img src="/cookie-logo/happy-cookie.webp" alt="Happy cookie" />
      <h3>Happy Cookie</h3>
    </div>
  );
}

export default Logo;
