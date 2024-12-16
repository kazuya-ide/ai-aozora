// src/components/common/Header/Header.tsx
'use client';

import Link from 'next/link';
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
    <header
      className={`py-4 bg-gray-100 dark:bg-gray-800 flex justify-between items-center transition-colors duration-300`}
    >
      <nav className="flex justify-between items-center w-full max-w-5xl mx-auto">
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300"
        >
          My Portfolio
        </Link>
        <ul className="list-none m-0 p-0 flex gap-4">
          <li>
            <Link
              href="/about"
              className="text-gray-800 dark:text-gray-300 transition-colors duration-300 py-2 px-4 hover:text-blue-500 dark:hover:text-blue-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-gray-800 dark:text-gray-300 transition-colors duration-300 py-2 px-4 hover:text-blue-500 dark:hover:text-blue-400"
            >
               Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-800 dark:text-gray-300 transition-colors duration-300 py-2 px-4 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          className="bg-transparent border-none text-gray-800 dark:text-gray-300 text-base cursor-pointer transition-colors duration-300"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
}