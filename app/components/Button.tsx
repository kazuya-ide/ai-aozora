// app/(components)/Button/Button.tsx
import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
}) => {
  const baseStyles =
    `inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ` +
    className;


    const variantStyles = () => {
        switch (variant) {
            case 'primary':
                return 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 disabled:bg-gray-300';
            case 'secondary':
                return 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300 disabled:bg-gray-100';
            case 'text':
                return 'text-blue-500 hover:text-blue-600 focus:ring-blue-500 disabled:text-gray-400 bg-transparent'
            default:
                return 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 disabled:bg-gray-300';
        }
    };
  const sizeStyles = () => {
    switch (size) {
      case 'small':
        return 'px-2 py-1 text-sm';
      case 'medium':
        return 'px-4 py-2 text-base';
      case 'large':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles()} ${sizeStyles()}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;