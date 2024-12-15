// src/components/common/Header/Header.tsx
'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // ローカルストレージからテーマ設定を読み込む
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          My Portfolio
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link href="/about" className={styles.navItem}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className={styles.navItem}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navItem}>
              Contact
            </Link>
          </li>
        </ul>
        <button className={styles.darkModeButton} onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
}