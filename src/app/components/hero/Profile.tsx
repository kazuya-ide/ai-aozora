// src/app/components/hero/Profile.tsx
import React from 'react';

interface ProfileProps {
    imageSrc?: string; // imageSrc プロパティは文字列型で、画像のパスを表す。オプショナル
  }

const Profile: React.FC<ProfileProps> = ({imageSrc}) => { //Propsを受け取るように修正
    return (
        <section className="container mx-auto py-12">
          <h2 className="text-4xl font-normal text-center mb-8 tracking-widest">PROFILE</h2>
          <h3 className='text-md font-light text-center mb-8 tracking-wide'>プロフィール</h3>
          <div className="flex flex-col md:flex-row items-center gap-10 px-4 sm:px-20">
            <div className="w-full md:w-1/3 bg-gray-400 h-64">
                {imageSrc && <img src={imageSrc} alt="Profile Picture" className="w-full h-full object-cover" />}
            </div>
            <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-medium tracking-wide">山田 タロウ</h2>
            <p className="text-sm font-light tracking-wider text-gray-500">TARO YAMADA</p>
            <div className="flex gap-2 mt-2">
              <a href="#" className="text-sm font-light tracking-wide text-gray-700">Instagram</a>
              <span className='text-sm font-light text-gray-400'>.</span>
              <a href="#" className="text-sm font-light tracking-wide text-gray-700">X(Twitter)</a>
              <span className='text-sm font-light text-gray-400'>.</span>
              <a href="#" className="text-sm font-light tracking-wide text-gray-700">Behance</a>
            </div>
            <p className="text-sm font-light tracking-wider mt-4">東京を拠点に活動するフリーランスのデザイナーです。</p>
            <p className="text-sm font-light tracking-wider mt-2">制作会社のデザイナーとして5年ほど多くのプロジェクトに携わった後、2020年に独立しました。</p>
            <p className="text-sm font-light tracking-wider mt-2">小規模なスタートアップから大手企業まで、さまざまなクライアントのデザインとウェブサイト制作、イラストレーション制作を手掛けています。</p>
            </div>
          </div>
        </section>
    );
};

export default Profile;