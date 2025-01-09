import React from 'react';
import * as HeroComponents from './hero';
import { FC } from 'react';
const commonImage = "/青空の写真.jpg";
const ComponentsPage: FC = () => {
    const components = Object.entries(HeroComponents) as [string, React.FC<any>][];
     return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Hero Components</h1>
             <div className="flex flex-col gap-4">
                {components.map(([componentName, Component]) => {
                 return (
                       <div key={componentName} className="p-4 border border-gray-300 rounded">
                         <h2 className="text-lg font-semibold mb-2">{componentName}</h2>
                         <Component imageSrc={commonImage} />
                       </div>
                  );
                  })}
            </div>
        </div>
     );
};
export default ComponentsPage;