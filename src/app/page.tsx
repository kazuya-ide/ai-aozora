// src/app/page.tsx
import WordPressPosts from '@/components/WordpressPosts';
import Header from '@/components/common/Header/Header'; 
import  Footer from '@/components/common/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <WordPressPosts />
      <Footer />
    </>
  );
}