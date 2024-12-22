// src/components/WordPressPosts.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PostModal from '../components/PostModal';
import useFetchWordPressPosts from '../useFetchWordPressPosts';

interface Post {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    featured_media: number;
    _embedded?: {
        'wp:featuredmedia'?: {
            source_url: string;
        }[]
    };
}


const WordPressPosts = () => {
    const [displayedCount, setDisplayedCount] = useState(6);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { posts, loading, error } = useFetchWordPressPosts();


    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 1024) {
          setDisplayedCount(4);
        } else {
          setDisplayedCount(6);
        }
      };

      handleResize(); // 初回ロード時に実行
       window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      }
    }, []);



    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const displayedPosts = posts.slice(0, displayedCount);
    const hasMore = posts.length > displayedCount;

    const truncateText = (text: string, maxLength: number) => {
        if (!text) return '';
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };

      const handleReadMoreClick = (post: Post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
      }
    
    const handleCloseModal = () => {
         setSelectedPost(null);
        setIsModalOpen(false);
     }

    return (
        <section className="py-16">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
                    <div className="flex items-center gap-1 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-square-dashed-mouse-pointer size-5">
                            <path d="M5 3a2 2 0 0 0-2 2"></path>
                            <path d="M19 3a2 2 0 0 1 2 2"></path>
                            <path d="m12 12 4 10 1.7-4.3L22 16Z"></path>
                            <path d="M5 21a2 2 0 0 1-2-2"></path>
                            <path d="M9 3h1"></path>
                            <path d="M9 21h2"></path>
                            <path d="M14 3h1"></path>
                            <path d="M3 9v1"></path>
                            <path d="M21 9v2"></path>
                            <path d="M3 14v1"></path>
                        </svg>
                        <p>Blog Posts</p>
                    </div>
                    <Link href="#" className="hover:text-gray-800 hover:underline flex items-center">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2 inline-block size-4">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </Link>
                </div>
                <div className="h-[1px] bg-border w-full mb-8 mt-3"></div>
                <div className="flex flex-col justify-between gap-6 lg:flex-row">
                    <h2 className="text-3xl font-medium lg:w-1/2">What you can do with our blog posts?</h2>
                    <p className="lg:w-1/2 text-gray-600 break-words">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae praesent, ad ullam quis cupiditate atque maxime alias eaque repellendus perferendis, nemo repudiandae.
                    </p>
                </div>
                <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedPosts.map((post) => (
                        <div key={post.id} className="rounded-lg border  text-gray-900 dark:text-white shadow-sm bg-transparent w-full flex flex-col">
                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
                                <button
                                   onClick={() => handleReadMoreClick(post)}
                                     className="w-full  relative aspect-video"
                                  >
                                      <Image
                                        src={post._embedded['wp:featuredmedia'][0].source_url}
                                        alt={post.title.rendered}
                                        fill
                                        className="object-cover rounded-t-lg"
                                         sizes="(max-width: 768px) 100vw, 33vw"
                                        style={{objectFit: 'cover'}}
                                      />
                                </button>
                            )}
                            <div className="p-4 flex flex-col">
                                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{truncateText(post.title.rendered, 50)}</h3>
                                <div
                                     className="text-sm text-gray-600 overflow-hidden line-clamp-3  dark:text-gray-400 flex-1"
                                    dangerouslySetInnerHTML={{ __html: truncateText(post.content.rendered, 50) }}
                                />
                              
                                 <div className="text-center py-2">
                                     <button
                                          onClick={() => handleReadMoreClick(post)}
                                          className="text-blue-500 hover:underline"
                                     >Read More
                                     </button>
                                 </div>
                            </div>
                        </div>
                    ))}
                </div>
                {hasMore && (
                    <div className="mt-4 text-center">
                        <Link href="/projects" className="text-blue-500 hover:underline">
                            More Posts
                        </Link>
                    </div>
                )}
                 {selectedPost &&  
                    <PostModal
                     post={selectedPost}
                     onClose={handleCloseModal}
                     isOpen={isModalOpen}
                    />
                  }
            </div>
        </section>
    );
};

export default WordPressPosts;