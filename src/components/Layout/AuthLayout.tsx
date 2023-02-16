import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <main className="relative flex flex-col overflow-hidden scrollbar-hide bg-gradient-to-tr from-primary to-primary-light h-[100vh]">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
