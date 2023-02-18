import React from 'react';
import Catch from '@/utils/errorHandler';

type Props = {
  children: React.ReactNode;
};

const ErrorBoundary = Catch(function ErrorBoundary(
  props: Props,
  error?: Error
) {
  if (error) {
    return (
      <div className="m-3 p-3 flex flex-col gap-3 bg-red-400 rounded text-white mt-11">
        <h2 className="text-base">An error has occured</h2>
        <p className="text-sm text-text p-2 font-light bg-red-200 rounded">
          {error.message}
        </p>
      </div>
    );
  } else {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
});

export default ErrorBoundary;
