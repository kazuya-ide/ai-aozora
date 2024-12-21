// src/components/HeroIntroduction.tsx
'use client';
import Link from 'next/link';

export default function HeroIntroduction() {
  return (
    <section className="py-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
            <div className="text-center">
                 <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    はじめまして。Webデザイナー兼フロントエンドエンジニアの〇〇（氏名）です。
                 </h1>
            </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  これまで、中小企業のコーポレートサイトから、個人事業主のランディングページまで、幅広いジャンルのHP制作に携わってきました。<br/>
                   HTML, CSS, JavaScriptといったフロントエンド技術はもちろん、ReactやNext.jsなどのフレームワーク、WordPressを用いたサイト構築も得意としています。
                </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                デザインにおいては、UI/UXを考慮し、ユーザーにとって使いやすく、目的を達成できるWebサイト作りを心がけています。<br/>
                このポートフォリオでは、私が手がけたHP制作事例を掲載しています。ぜひご覧いただき、私のスキルやデザインセンスを感じていただければ幸いです。
               </p>
            <div className="text-center">
             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    HP制作に関するご相談やご依頼は、お気軽にご連絡ください。<br/>
                     メール：your_email@example.com
              </p>
          </div>
          </div>
      </div>
    </section>
  );
}