import React from 'react';

type ButtonsProps = {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  title: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isDanger?: boolean;
  isFull?: boolean;
  onClick: () => void;
};

const Buttons: React.FC<ButtonsProps> = ({
  title,
  children,
  type,
  onClick,
  isPrimary,
  isSecondary,
  isDanger,
  isFull,
}) => {
  const className = [
    'inline-flex justify-center rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all',
  ];

  isPrimary && className.push('bg-primary text-white hover:bg-opacity-90');

  isSecondary &&
    className.push(
      'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white'
    );

  isDanger && className.push('bg-red-100 text-red-900 hover:bg-red-200');

  isFull && className.push('w-full');

  return (
    <button
      id={`button-${title}`}
      type={type}
      onClick={onClick}
      className={className.join(' ')}
    >
      {children}
    </button>
  );
};

export default React.memo(Buttons);
