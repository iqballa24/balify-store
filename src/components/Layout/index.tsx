import React, { useEffect } from 'react';
import LoadingBar from 'react-redux-loading-bar';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useAppDispatch } from '@/hooks/useRedux';
import { asyncPreloaderProcess } from '@/store/shared/action';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncPreloaderProcess());
  }, [dispatch]);

  return (
    <React.Fragment>
      <LoadingBar className="absolute bg-gradient-to-r from-primary to-primary-light h-1 z-50" />
      <Header />
      <main className="relative flex flex-col px-4 py-6 overflow-scroll scrollbar-hide max-h-[603px] h-full">
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
