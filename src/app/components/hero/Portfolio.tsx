// src/app/components/hero/Hero.tsx
import React from 'react';

const Portfolio: React.FC = () => {
    return (
        <header className="flex flex-col items-center py-8 text-center border-b border-gray-200">
            <div className='flex justify-between items-center w-full px-4 sm:px-20'>
                 <div className='flex flex-col'>
                     <h1 className="text-xl font-normal tracking-wide">TARO YAMADA</h1>
                     <p className="text-xs font-light tracking-wider">フリーランスデザイナー 山田タロウ</p>
                 </div>

                 <div className='flex gap-2'>
                     <a href="#" className="w-6 h-6 bg-gray-200 rounded-full flex justify-center items-center">I</a>
                     <a href="#" className="w-6 h-6 bg-gray-200 rounded-full flex justify-center items-center">X</a>
                     <a href="#" className="w-6 h-6 bg-gray-200 rounded-full flex justify-center items-center">B</a>
                 </div>
              </div>
            <div className='flex flex-col py-4'>
                <h2 className="text-5xl font-thin tracking-wider">Portfolio</h2>
                <p className="text-sm font-light tracking-widest">Design & Website</p>
                <p className="text-sm font-light tracking-widest">Tokyo, Japan</p>
            </div>
            <div className='flex justify-end items-center w-full px-4 sm:px-20 pt-10'>
             <span className="text-xs font-light tracking-wider">稼働状況</span>
             <div className="w-6 h-6 bg-yellow-200 rounded-full flex justify-center items-center ml-2">!</div>
             <span className="text-xs font-light tracking-wider">現在お仕事募集中です!</span>
             </div>
          </header>
    );
};

export default Portfolio;