import "../styles/globals.css";
import type { Metadata } from 'next';

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
    <html lang="ja">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        {children}
      </body>
    </html>
  );
}