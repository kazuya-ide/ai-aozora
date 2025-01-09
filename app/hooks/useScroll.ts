// app/(hooks)/useScroll.ts
'use client';

import { useState, useEffect } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
}

const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollDirection: null,
  });

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
       const currentScrollY = window.scrollY;
       const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
           setScrollPosition({ scrollY:currentScrollY,scrollDirection });
       lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScroll;