import React from 'react';

const Quote: React.FC<{ quote: string; author: string }> = ({
  quote,
  author,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <q className="text-white text-opacity-75 text-w font-light text-sm">
        {quote}
      </q>
      <span className="text-end text-white text-opacity-75 font-light text-xs">
        ~ {author}
      </span>
    </div>
  );
};

export default React.memo(Quote);
