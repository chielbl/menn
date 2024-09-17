import { Logo } from '@/shared/components';
import styles from './home.module.css';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

function HomePage() {
  return (
    <section id="home_page" className={styles.homePage}>
      <Logo className={styles.logo} />
      <div className={styles.slogan}>
        <div className={styles.sloganContent}>
          <h1>
            Enjoy the <span>fresh</span>, home made,
          </h1>
          <h1>happy cookies</h1>
        </div>

        <Link
          href="/shop"
          className="animate__animated animate__fadeIn animate__delay-2s"
        >
          Shop now
          <ChevronDown
            className="animate__animated animate__fadeInDown animate__infinite animate__delay-2s animate__slow"
            size={24}
          />
        </Link>
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

export default HomePage;
