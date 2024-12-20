
import WordPressPosts from '@/app/components/WordpressPosts';
import WordPressPostBlog from '@/app/components/WordpressPostBlog';
import Header from '@/app/components/common/Header/Header'; 
import  Footer from '@/app/components/common/Footer/Footer';


export default function Home() {
  return (
    <>
    
    <Header />
    
    <WordPressPosts />
    <WordPressPostBlog />
<svg viewBox="0 0 756 704" width="756" height="704" className="home-header-image-overlay" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M291.5.53c-28.763 2.715-46.093 5.475-67.513 10.753C111.422 39.02 30.669 114.002 6.599 213.138.803 237.009 0 244.701 0 276.38c0 31.033.213 33.254 6.618 69C33.572 495.82 94.575 601.074 187 656.607c43.771 26.299 93.78 41.43 153.201 46.352 19.11 1.583 73.202.679 91.299-1.526 65.894-8.027 119.867-26.808 167-58.11 18.2-12.087 32.582-23.933 49.046-40.397 35.539-35.539 61.807-77.262 80.929-128.546 12.34-33.096 22.515-76.752 26.076-111.882 1.574-15.526.695-57.454-1.486-70.941-5.361-33.14-13.78-58.888-28.63-87.55C666.92 92.993 530.466 15.95 365.5 1.35c-14.663-1.297-63.234-1.836-74-.82Z" fill="#000" fill-opacity="0.15"></path>
</svg>

      <Footer />
    </>
  );
}