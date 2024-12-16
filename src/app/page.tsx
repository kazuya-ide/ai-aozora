
import WordPressPosts from '@/app/components/WordpressPosts';
import Header from '@/app/components/common/Header/Header'; 
import  Footer from '@/app/components/common/Footer/Footer';

export default function Home() {
  return (
    <>
    
    <Header />
    
      <WordPressPosts />
      <Footer />
    </>
  );
}