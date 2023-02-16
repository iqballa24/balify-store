import { Quote } from '@/components/UI';
import React from 'react';

type Props = {
  name: string;
  quote: {
    author: string;
    content: string;
  };
};

const GreetingsCard: React.FC<Props> = ({ name, quote }) => {
  return (
    <div className="flex flex-col gap-2 px-5 py-8 bg-gradient-to-r from-primary to-primary-light rounded-2xl w-full h-full">
      <h1 className="text-white text-lg">Hello {name} 👋</h1>
      <Quote author={quote.author} quote={quote.content} />
    </div>
  );
};

export default React.memo(GreetingsCard);
