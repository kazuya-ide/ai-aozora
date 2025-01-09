// app/(components)/Card/Card.tsx
'use client'; // クライアントコンポーネントとして指定

import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="rounded-md p-4 border shadow-sm">
      {children}
    </div>
  );
};

export default Card;