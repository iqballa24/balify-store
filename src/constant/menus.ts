import { menuTypes } from '@/lib/types';
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineShoppingCart,
  AiOutlineHistory,
} from 'react-icons/ai';

const menus: menuTypes[] = [
  {
    id: 1,
    name: 'Home',
    icon: AiOutlineHome,
    path: '/home',
  },
  {
    id: 2,
    name: 'Explore',
    icon: AiOutlineCompass,
    path: '/explore',
  },
  {
    id: 3,
    name: 'Cart',
    icon: AiOutlineShoppingCart,
    path: '/cart',
  },
];

export default menus;
