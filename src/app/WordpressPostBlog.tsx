// src/components/WordPressPostBlog.tsx
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

const WordPressPostBlog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          `${apiUrl}/wp/v2/blog?_embed`
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
          setError('データの取得に失敗しました。(不明なエラー)');
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

  return (
    <div className="mx-auto max-w-screen-lg px-4 md:px-0">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded-lg shadow-md flex">
            <div className="w-1/2 mr-4">
              {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
                <div style={{ width: '400px', height: '600px', position: 'relative' }}>
                  <Image
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              )}
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl font-bold mb-2">{post.title.rendered}</h2>
              <div className="text-gray-700 max-h-[300px] overflow-hidden relative">
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white via-white to-transparent"></div>
              </div>
              <button className="text-blue-500 mt-2">Read More</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordPressPostBlog;