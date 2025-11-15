import { ReactNode } from 'react';
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  color?: 'outline' | 'primary' | 'warning' | 'normal';
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick = () => {},
  type = 'submit',
  color = 'primary',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseClass = 'cursor-pointer py-2 px-2 rounded-lg transition-colors duration-150 ';

  const colorClass =
    color == 'primary'
      ? 'text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-600'
      : color == 'warning'
      ? 'text-white bg-red-400 hover:bg-red-500 active:bg-red-600'
      : color == 'outline'
      ? 'outline-1 bg-white text-blue-400 outline-blue-400 hover:outline-2 hover:outline-blue-500 active:outline-blue-600 '
      : 'outline-1 bg-gray-100 outline-gray-300 hover:outline-2 hover:bg-gray-300';

  const disabledClass = 'text-white bg-blue-200';
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${baseClass} ${
        disabled ? disabledClass : colorClass
      } ${className}`}
    >
      {children}
    </button>
  );
}
