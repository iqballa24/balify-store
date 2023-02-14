import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-row flex-wrap justify-between">
        <p>Tetser</p>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
