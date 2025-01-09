'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Nav from '@/app/components/Nav'; // ナビゲーションコンポーネント
import MobileMenu from '@/app/components/MobileMenu'; // モバイルメニューコンポーネント
import HamburgerButton from '@/app/components/HumburgerButton'; // ハンバーガーボタンコンポーネント

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderTransparent(true);
      } else {
        setIsHeaderTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isHeaderTransparent ? 'bg-white/80 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <Link
          href="/"
          className={`text-xl font-bold text-gray-900 transition-colors duration-300 ${
            isHeaderTransparent ? 'text-black' : ''
          }`}
        >
          My Portfolio
        </Link>
        <Nav isHeaderTransparent={isHeaderTransparent} />
        <div className="md:hidden relative">
         <HamburgerButton
            onClick={toggleMenu}
            isHeaderTransparent={isHeaderTransparent}
            />
         <MobileMenu isOpen={isMenuOpen} isHeaderTransparent={isHeaderTransparent}/>
        </div>
      </div>
    </header>
  );
}