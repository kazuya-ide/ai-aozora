import WordPressPosts from '@/app/components/WordpressPosts';
import WordPressPostBlog from '@/app/components/WordpressPostBlog';
import Header from '@/app/components/common/Header/Header'; 
import  Footer from '@/app/components/common/Footer/Footer';

import HeroIntroduction from './components/HeroIntroduction';

export default function Home() {
  return (
    <>
 
 <HeroIntroduction /> 
     <WordPressPosts />
  
     <Footer />
    </>
  );
}