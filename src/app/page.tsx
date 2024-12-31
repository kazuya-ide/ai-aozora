import WordPressPosts from '@/app/components/WordpressPosts';
import WordPressPostBlog from '@/app/components/WordpressPostBlog';

import  Footer from '@/app/components/common/Footer/Footer';
import Hoom from '@/app/components/Home'
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