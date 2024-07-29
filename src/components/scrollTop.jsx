// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      id="topButton"
      className={`fixed bottom-10 right-10 z-10 animate-bounce rounded-full bg-Pink w-16 h-16 ${isVisible ? 'flex' : 'hidden'} justify-center items-center shadow-md`}
    >
      <i className="fas fa-arrow-up text-3xl text-white"></i>
    </button>
  );
};

export default ScrollToTopButton;