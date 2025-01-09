// src/app/components/hero/HeroSection.tsx
import React from 'react';

// Props の型定義
interface HeroSectionProps {
    imageSrc: string; // 背景画像のパス
  }

// HeroSection コンポーネントの定義
const HeroSection: React.FC<HeroSectionProps> = ({ imageSrc }) => {
  return (
      <section className="relative bg-blue-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
              集客に強いWebサイト
          </h1>
          <p className="text-gray-700 mb-8">
              Webであなたの事業に貢献します
          </p>
          <div className="flex justify-center space-x-8 mb-8">
              <div className="flex flex-col items-center">
              <span className="text-3xl">🎯</span>
              <span>迅速</span>
              </div>
              <div className="flex flex-col items-center">
              <span className="text-3xl">✅</span>
              <span>丁寧</span>
              </div>
              <div className="flex flex-col items-center">
              <span className="text-3xl">🏅</span>
              <span>高品質</span>
              </div>
          </div>
          <div className="absolute inset-0 bg-blue-200/20 blur-2xl"></div>
            <img
                src={imageSrc}
                alt="背景画像"
                className="absolute inset-0 object-cover w-full h-full opacity-20"
            />
        </div>
      </section>
    );
};

export default HeroSection;