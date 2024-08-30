'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to the home page</h1>
    </div>
  );
}
