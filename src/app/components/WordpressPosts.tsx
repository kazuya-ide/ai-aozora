// src/components/WordPressPosts.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import useFetchWordPressPosts from '../useFetchWordPressPosts';
import PostCard from './PostCard'; // PostCardコンポーネントをインポート


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
    } | undefined;
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
        };
    }, []);

    useEffect(() => {
      return () => {
           document.body.style.overflow = '';
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

    const handleReadMoreClick = (post: Post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
        setIsModalOpen(false);
        document.body.style.overflow = '';
    };


    return (
        <section className="py-16">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
                    「補足」 <br />
                    このサイトはreact×Nextjs×vercelで作成しています<br />
                    またワードプレスから投稿を更新しています
                </div>
                <div className="h-[1px] bg-border w-full mb-8 mt-3"></div>
                <div className="flex flex-col justify-between gap-6 lg:flex-row">
                    <h2 className="text-3xl font-medium lg:w-1/2">Project</h2>
                    <p className="lg:w-1/2 text-gray-600 break-words">
                        作ったものを載せてます、画像かReadMoreをタップすると詳細がモーダルで表示されます
                    </p>
                </div>
                <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedPosts.map((post, index) => (
                        <PostCard
                            key={post.id}
                            post={post}
                            delay={200 * (index + 1)}
                            onReadMoreClick={handleReadMoreClick}
                        />
                    ))}
                </div>
                {hasMore && (
                    <div className="mt-4 text-center">
                        <Link href="/projects" className="text-blue-500 hover:underline">
                            More Posts
                        </Link>
                    </div>
                )}
                {isModalOpen && selectedPost && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={handleCloseModal}>
                        <div className="bg-white rounded-lg p-6 w-full max-w-2xl relative" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <div
                                className="text-gray-700 overflow-y-auto max-h-[80vh]"
                                dangerouslySetInnerHTML={{ __html: selectedPost.content.rendered }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WordPressPosts;