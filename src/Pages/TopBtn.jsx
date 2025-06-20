import { useEffect, useState } from 'react';
import style from './TopBtn.module.css';

export default function TopBtn() {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        // Scrolling down
        setShowButton(true);
      } else {
        // Scrolling up
        setShowButton(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button className={style.toTop} onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up fa-bounce fa-lg"></i>
      </button>
    )
  );
}
