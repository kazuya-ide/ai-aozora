// src/components/common/Footer/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-4 text-center  text-black">
      <p>© {new Date().getFullYear()} My Portfolio</p>
     
    </footer>
  );
}