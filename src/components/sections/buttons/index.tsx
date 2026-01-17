import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'secondary-small';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  type = 'button',
}) => {
  const baseStyles = 'font-semibold rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 px-6 py-3 text-base',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 px-6 py-3 text-base',
    'secondary-small': 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 px-4 py-2 text-sm',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ''}`}
    >
      {children}
    </button>
    
  );
};

export default Button;