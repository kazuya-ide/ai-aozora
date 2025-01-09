// app/(components)/Section/Section.tsx
import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  title,
    id,
}) => {
  return (
      <section id={id} className={`py-16 ${className}`}>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {title && <h2 className='text-3xl font-medium mb-8 text-gray-900 dark:text-white'>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;