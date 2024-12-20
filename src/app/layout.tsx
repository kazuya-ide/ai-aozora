// src/app/layout.tsx
import './styles/globals.css';
import type { Metadata } from 'next';
import Header from '@/app/components/common/Header/Header'; 
export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My personal portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="bg-white dark:bg-black text-gray-900 dark:text-gray-50">
      <body >
       
        {children}
      </body>
    </html>
  );
}