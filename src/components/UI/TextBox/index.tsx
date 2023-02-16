import React from 'react';

const TextBox: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <div className="flex flex-col py-3 space-y-3">
      <span className='text-sm text-primary'>{title}</span>
      <span className="text-text text-sm w-full pr-4">
        {value}
      </span>
    </div>
  );
};

export default React.memo(TextBox);
