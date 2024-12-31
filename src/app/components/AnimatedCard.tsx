// src/components/AnimatedCard.tsx
import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface AnimatedCardProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    animationType?: 'fade' | 'slide' | 'zoom' | 'none'; // アニメーションの種類を追加
    animationDuration?: number; // アニメーション時間を追加
    animationEasing?: string; // アニメーションのeasingを追加
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, delay = 200, className = "", animationType = 'fade', animationDuration = 0.3, animationEasing = 'ease-in-out' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
      const timerId = setTimeout(() => {
         setIsVisible(true);
      }, delay);

        return () => clearTimeout(timerId);
    }, [delay]);

    // アニメーションスタイルを定義
    let animationStyles = {};
    if (animationType === 'fade') {
         animationStyles = { opacity: isVisible ? 1 : 0, transition: `opacity ${animationDuration}s ${animationEasing}` };
    } else if (animationType === 'slide') {
      animationStyles = {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity ${animationDuration}s ${animationEasing}, transform ${animationDuration}s ${animationEasing}`,
       };
    } else if(animationType === 'zoom'){
        animationStyles = {
             opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.9)',
            transition: `opacity ${animationDuration}s ${animationEasing}, transform ${animationDuration}s ${animationEasing}`,
        };
    } else {
        animationStyles = { }; // アニメーションがない場合
    }

    return (
        <div
             className={`${className} ${isVisible ? 'show' : ''}`}
            style={{ ...animationStyles}}
           ref={cardRef}
        >
            {children}
        </div>
    );
};

export default AnimatedCard;