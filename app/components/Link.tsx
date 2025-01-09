// app/(components)/Link/Link.tsx
import React, { ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const Link: React.FC<CustomLinkProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <NextLink
      className={`${className}`}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;