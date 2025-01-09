// app/(components)/Image/Image.tsx
'use client'; // クライアントコンポーネントとして指定

import React from 'react';
import NextImage, { ImageProps } from 'next/image';

interface CustomImageProps extends ImageProps {
  className?: string;
}

const Image: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  ...props
}) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
       className={`object-cover ${className}`}
      {...props}
    />
  );
};

export default Image;