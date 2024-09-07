'use client';

import styles from './home.module.css';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const [redirectToShop, setRedirectToShop] = useState(false);
  const router = useRouter();

  const handlerRedirectToShop = () => {
    if (!redirectToShop) {
      setRedirectToShop(true);
      router.push('/shop');
    }
  };

  // Once you scrolling or pressing space balk, down key it will redirect to the shop
  if (!redirectToShop) {
    document.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        handlerRedirectToShop();
      }
    });
  }

  return (
    <section id="home_page" className={styles.homePage}>
      <div className={styles.logo}>
        <img src="/cookie-logo/happy-cookie.webp" alt="logo" />
        <h3>Happy cookie</h3>
      </div>

      <div className={styles.slogan}>
        <div className={styles.sloganContent}>
          <h1>
            Enjoy the <span>fresh</span>, home made,
          </h1>
          <h1>happy cookies</h1>
        </div>

        <button
          className="animate__animated animate__flash animate__infinite animate__delay-2s animate__slower"
          onClick={handlerRedirectToShop}
        >
          <ChevronDown size={24} />
        </button>
      </div>

      <video className={styles.bgVideo} autoPlay loop muted>
        <source
          src="/background/intro_background_resized.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
