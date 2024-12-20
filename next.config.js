// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   compiler: {
     styledComponents: true,
    },
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'project1.ai-aozora.jp',
          pathname: '/**',
       },
     ],
   },
    content: [
         './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
         './src/components/**/*.{js,ts,jsx,tsx,mdx}',
         './src/app/**/*.{js,ts,jsx,tsx,mdx}',
       ],
 };
 
 module.exports = nextConfig;