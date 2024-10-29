import '@/styles/globals.css';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <footer>&copy; Happy Cookie 2024</footer>
    </>
  );
}
