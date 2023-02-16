import React from 'react';
import { AvatarImage } from '@/components/UI';
import { AiOutlineLogout } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { unSetAuthUser } from '@/store/auth/action';

const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(unSetAuthUser());
  };

  return (
    <header className="flex flex-row flex-wrap justify-between py-3 px-4 bg-white">
      <div className="flex-1 flex flex-row items-center md:space-x-3">
        <span className="font-bold text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">
          Balify
        </span>
      </div>
      <div className="flex-1 flex flex-row items-center justify-end space-x-3">
        <div className="relative group cursor-pointer">
          <AvatarImage name={user.name} size={44} />
          <div className="hidden group-hover:flex flex-col absolute top-0 right-0 z-10">
            <div className="h-[58px] bg-transparent"></div>
            <div className="flex flex-col bg-white p-3 rounded space-y-5">
              <div
                className="flex flex-row items-center gap-3 hover:text-red-400 cursor-pointer w-full"
                onClick={logoutHandler}
              >
                <AiOutlineLogout size={16} title="Log out" />
                <span className="text-sm whitespace-nowrap">Log out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
