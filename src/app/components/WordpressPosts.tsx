// src/components/WordPressPosts.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
                if (!apiUrl) {
                    setError('WordPress API URLが設定されていません。');
                    setLoading(false);
                    return;
                }

                const response = await fetch(
                    `${apiUrl}/wp/v2/posts?_embed`
                );
                if (!response.ok) {
                    throw new Error(`APIリクエストに失敗しました: ${response.status}`);
                }
                const data: Post[] = await response.json();
                setPosts(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message || 'データの取得に失敗しました。');
                } else {
                    setError('データの取得に失敗しました.(不明なエラー)');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const handleImageClick = (post: Post) => {
        setSelectedPost(post);
    };

    const closeModal = () => {
        setSelectedPost(null);
    };

    const getFirstImageFromContent = (content: string): string | null => {
        const imgRegex = /<img.*?src=["'](.*?)["'].*?>/i;
        const match = content.match(imgRegex);
        return match ? match[1] : null;
    };

    const removeImageSize = (content: string): string => {
        return content.replace(/width=".*?"/gi, '').replace(/height=".*?"/gi, '');
    };

    const truncateText = (text: string, maxLength: number) => {
        if (!text) return "";
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + "...";
    };

    return (
        <div className="mx-auto max-w-screen-lg px-4 md:px-0">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            <ul className="space-y-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {posts.map((post) => (
                    <li key={post.id} className="rounded-lg shadow-md flex flex-col">
                        <div className="relative group cursor-pointer" onClick={() => handleImageClick(post)}>
                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
                                <div style={{ width: '100%', height: '300px', position: 'relative' }}>
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold text-xl">Click</span>
                                    <Image
                                        src={post._embedded['wp:featuredmedia'][0].source_url}
                                        alt={post.title.rendered}
                                        fill
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                        sizes="(max-width: 768px) 100vw, 400px"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="p-4 flex flex-col justify-between">
                            <h2 className="text-2xl font-bold mb-2">{post.title.rendered}</h2>
                            <div className="text-gray-700 max-h-[100px] overflow-hidden relative">
                                <div dangerouslySetInnerHTML={{ __html: truncateText(post.content.rendered, 50) }} />
                                <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white via-white to-transparent"></div>
                            </div>
                            <div className="text-blue-500 mt-2 cursor-pointer" onClick={() => handleImageClick(post)}>Click Here</div>
                        </div>
                    </li>
                ))}
            </ul>
            {selectedPost && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
                    <div className="bg-white p-8 rounded-lg relative flex flex-col md:flex-row min-w-[80vw] min-h-[80vh] max-w-[80vw] max-h-[80vh] overflow-auto">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="w-1/2 pr-4 flex items-center justify-center">
                            {getFirstImageFromContent(selectedPost.content.rendered) ? (
                                <div style={{ height: '100%', position: 'relative', width: '100%' }}>
                                    <Image
                                        src={getFirstImageFromContent(selectedPost.content.rendered) as string}
                                        alt={selectedPost.title.rendered}
                                        fill
                                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            ) : (
                                selectedPost._embedded && selectedPost._embedded['wp:featuredmedia'] && selectedPost._embedded['wp:featuredmedia'][0] && (
                                    <div style={{ height: '100%', position: 'relative', width: '100%' }}>
                                        <Image
                                            src={selectedPost._embedded['wp:featuredmedia'][0].source_url}
                                            alt={selectedPost.title.rendered}
                                            fill
                                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                        <div className="w-1/2 pl-4 overflow-auto">
                            <h2 className="text-3xl font-bold mb-4">{selectedPost.title.rendered}</h2>
                            <div
                                className="text-gray-700"
                                dangerouslySetInnerHTML={{ __html: removeImageSize(selectedPost.content.rendered) }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WordPressPosts;