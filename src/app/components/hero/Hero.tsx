import React from 'react';
import Image from 'next/image';
import type { HeroComponentProps } from '@/app/types/hero';

const Hero: React.FC<HeroComponentProps> = ({ imageSrc }) => {
   return (
     <div>
         {imageSrc && <Image src={imageSrc} alt="hero image" width={500} height={300} />}
    </div>
   );
};

export default Hero;