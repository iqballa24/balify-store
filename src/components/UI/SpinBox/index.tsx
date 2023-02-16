import React from 'react';

type Props = {
  count: number;
  increaseHandler: () => void;
  decreaseHandler: () => void;
};

const SpinBox: React.FC<Props> = ({
  count,
  increaseHandler,
  decreaseHandler,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        className="hover:text-green-400"
        onClick={increaseHandler}
      >
        +
      </button>
      <span>{count}</span>
      <button
        type="button"
        className="hover:text-red-400"
        onClick={decreaseHandler}
      >
        -
      </button>
    </div>
  );
};

export default React.memo(SpinBox);
