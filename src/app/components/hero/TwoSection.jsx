import React from 'react';

const TwoSection = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 text-center sm:text-left flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-4xl font-bold text-gray-900">プロに任せる。</h2>
            <p className="mt-4 text-base text-gray-700">
              ジンドゥーに精通した制作のプロが、<br />
              あなたの代わりにホームページをお作りします。<br />
              全てを安心してお任せください。
            </p>
             <button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
            いますぐプロに依頼 <span className="ml-2 text-white text-xl font-bold">→</span>
           </button>
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-10 lg:mt-0">
            <h2 className="text-4xl font-bold text-gray-900">自分で作る。</h2>
             <p className="mt-4 text-base text-gray-700">
              まずは自分で作ってみたいという方にも最適。<br />
              ジンドゥーなら特別なスキルや知識がなくても<br />
              ホームページが作れます。
            </p>
               <button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            いますぐ無料で作成 <span className="ml-2 text-white text-xl font-bold">→</span>
          </button>
          </div>
            <div className="hidden sm:block absolute left-0 top-0 w-[40%]">
                <div className="relative overflow-hidden w-full">
                      <div className="relative">
                           <img
                            src=""//画像を挿入
                           alt=""//ALT
                            className="max-w-full block"
                            />
                            <div className="absolute inset-0">
                            <img
                              src=""//画像を挿入
                            alt=""//ALT
                             className="h-full w-full object-cover object-center max-w-full"
                              style={{ display: 'block', position: 'static' }}
                            />
                         </div>
                    </div>
                </div>
         </div>
          <div className="hidden sm:block absolute right-0 top-0 w-[40%]">
                <div className="relative overflow-hidden w-full max-w-[800px]">
                      <div className="relative">
                        <img
                            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3Cfilter id='a' x='0' y='0'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='0'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100' height='100' fill='rgba(255%2C255%2C255%2C0)' filter='url(%23a)'/%3E%3C/svg%3E"
                             alt="presentation"
                             className="max-w-full block"
                            />
                        <div className="absolute inset-0">
                            <img
                             src="https://images.unsplash.com/photo-1505740420928-5e560c06d31e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                              alt="presentation"
                             className="h-full w-full object-cover object-center max-w-full"
                                style={{ display: 'block', position: 'static' }}
                            />
                         </div>
                       </div>
                    </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default TwoSection;