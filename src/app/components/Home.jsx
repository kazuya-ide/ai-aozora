import React from 'react';

const Hoom = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 text-center sm:text-left">
          <p className="text-base font-medium text-gray-700 tracking-wide">
            Websites without the effort
          </p>
          <h1 className="mt-4 text-5xl font-bold text-gray-900 sm:text-6xl">
            ホームページ作成の<br />
            <span className="text-blue-500">全て</span>を簡単に。
          </h1>
          <button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            いますぐ無料で作成 <span className="ml-2 text-white text-xl font-bold">→</span>
          </button>
          <div className="hidden sm:block relative mt-16 md:mt-20 w-full ">
                <div className="relative overflow-hidden w-full max-w-[450px] md:max-w-md mx-auto">
                   <div  className="relative">
                    <img
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3Cfilter id='a' x='0' y='0'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='0'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100' height='100' fill='rgba(255%2C255%2C255%2C0)' filter='url(%23a)'/%3E%3C/svg%3E"
                        alt="presentation"
                        className="max-w-full block"
                    />
                  <div className="absolute inset-0 ">
                     <img
                        src="https://images.unsplash.com/photo-1616492964508-c6852488c0ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        alt="presentation"
                       className="h-full w-full object-cover object-center max-w-full"
                        style={{ display: 'block', position: 'static' }}
                      />
                   </div>
                 </div>
             </div>
                <div className="absolute right-0 top-[50%] -translate-y-[50%] -z-10  max-w-[400px]  lg:max-w-[700px] xl:max-w-[800px]">
                   <div className="relative overflow-hidden w-full">
                      <div  className="relative">
                       <img
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3Cfilter id='a' x='0' y='0'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='0'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100' height='100' fill='rgba(255%2C255%2C255%2C0)' filter='url(%23a)'/%3E%3C/svg%3E"
                            alt="presentation"
                            className="max-w-full block"
                        />
                         <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1586089902500-f02778b3147f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
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
    </div>
  );
};

export default Hoom;