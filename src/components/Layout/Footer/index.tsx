import React from 'react';
import { Tooltip } from 'react-tooltip';
import { NavLink } from 'react-router-dom';

import menus from '@/constant/menus';

const Footer = () => {
  const classNavLink =
    'flex justify-center py-5 cursor-pointer hover:text-primary transition-all';
  const active =
    'bg-orange-light dark:bg-transparent text-primary border-t-2 border-primary';

  return (
    <footer className="absolute w-full bottom-0 right-0 flex flex-row items-center bg-white">
      <ul className="flex flex-row items-center w-full">
        {menus.map((menu) => (
          <li key={menu.id} className="flex-1">
            <div id={`itemNav-${menu.name}`}>
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  isActive ? `${classNavLink} ${active}` : `${classNavLink}`
                }
              >
                <menu.icon size={20} />
              </NavLink>
            </div>
            <Tooltip className="!bg-primary text-white" anchorId={`itemNav-${menu.name}`} content={menu.name} />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
