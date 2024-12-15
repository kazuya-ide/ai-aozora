// src/components/WordPressPosts.tsx
'use client';

import { useState, useEffect } from 'react';

interface Post {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
}

const WordPressPosts = () => {
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

        const response = await fetch(`${apiUrl}/wp/v2/posts`);
         if (!response.ok) {
           throw new Error(`APIリクエストに失敗しました: ${response.status}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err: any) {
          setError(err.message || 'データの取得に失敗しました。');
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
    <div>
      <h1>WordPress Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
};


export default WordPressPosts;