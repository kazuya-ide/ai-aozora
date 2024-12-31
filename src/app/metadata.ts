   // src/metadata.ts
   import type { Metadata } from 'next';
   export const metadata: Metadata = {
       title: 'My Portfolio',
           description: 'My personal portfolio website',
       viewport: {
          width: 'device-width',
           initialScale: 1,
           minimumScale: 1,
           maximumScale: 1,
        },
   // OGP設定
     openGraph: {
        title: 'My Portfolio',
           description: 'My personal portfolio website',
         images: [
           {
           url: 'https://example.com/ogp.png', //OGP画像
            }
        ],
           locale: 'ja_JP',
           type: 'website'
        },
   // twitter用OGP設定
      twitter: {
        card: 'summary_large_image',
          title: 'My Portfolio',
          description: 'My personal portfolio website',
          images: [
               'https://example.com/ogp.png'
           ]
       }
     };