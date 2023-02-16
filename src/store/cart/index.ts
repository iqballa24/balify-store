import { VehicleTypes } from '@/lib/types';
import { createSlice } from '@reduxjs/toolkit';

export type CartType = {
  item: VehicleTypes[];
  totalItem: number;
  hasOrder: boolean;
};

const storeData = localStorage.getItem('carts');
const carts = JSON.parse(storeData ? storeData : '[]');

const initialState: CartType = {
  item: carts,
  totalItem: 0,
  hasOrder: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, { payload }) {
      state.item.push({ ...payload, amount: 1 });
      localStorage.setItem('carts', JSON.stringify(state.item));
    },

    removeItemFromCart(state, { payload }) {
      const newCarts = state.item.filter((cart) => cart.name !== payload.name);
      state.item = newCarts;
      localStorage.setItem('carts', JSON.stringify(state.item));
    },

    increaseItemCart(state, { payload }) {
      const newCarts = state.item.map((cart) => {
        if (cart.name === payload.name) {
          return {
            ...cart,
            amount: cart.amount! + 1,
          };
        } else {
          return { ...cart };
        }
      });

      state.item = newCarts;
      localStorage.setItem('carts', JSON.stringify(state.item));
    },

    decreseItemCart(state, { payload }) {
      const itemIndex = state.item.findIndex(
        (item) => item.name === payload.name
      );

      const existItem = state.item[itemIndex];

      if (existItem.amount === 1) {
        const newCarts = state.item.filter(
          (item) => item.name !== payload.name
        );
        state.item = newCarts;
      } else {
        const newCarts = state.item.map((cart) => {
          if (cart.name === payload.name) {
            return { ...cart, amount: cart.amount! - 1 };
          } else {
            return { ...cart };
          }
        });
        state.item = newCarts;
      }
      localStorage.setItem('carts', JSON.stringify(state.item));
    },

    changeStatusOrder(state) {
      state.hasOrder = !state.hasOrder;
    },

    clearItem(state) {
      state.item = [];
      localStorage.removeItem('carts');
    },
  },
});

export const cartSliceAction = cartSlice.actions;
export default cartSlice;
