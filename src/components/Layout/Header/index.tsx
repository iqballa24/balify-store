import React from 'react';
import { AvatarImage } from '@/components/UI';
import { AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="flex flex-row flex-wrap justify-between px-5 py-3 bg-white">
      <div className="flex-1 flex flex-row items-center md:space-x-3">
        <span className="font-bold text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">
          Balify
        </span>
      </div>
      <div className="flex-1 flex flex-row items-center justify-end space-x-3">
        <div className="relative group cursor-pointer sm:cursor-default">
          <AvatarImage name={'Tengku Iqbal Nugraha'} size={44} />
          <div className="hidden group-hover:flex group-hover:sm:hidden flex-col absolute top-0 right-0 z-10">
            <div className="h-[58px] bg-transparent"></div>
            <div className="flex flex-col bg-white dark:bg-bg-dark w-full p-5 rounded space-y-5">
              <div
                className="flex flex-row items-center space-x-5 hover:text-primary cursor-pointer"
                onClick={() => console.log('tester')}
              >
                <AiOutlineSetting size={18} title="Settings" />
                <span className="text-sm">Settings</span>
              </div>
              <div
                className="flex flex-row items-center space-x-5 hover:text-red cursor-pointer"
                onClick={() => console.log('')}
              >
                <AiOutlineLogout size={18} title="Log out" />
                <span className="text-sm">Log out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
