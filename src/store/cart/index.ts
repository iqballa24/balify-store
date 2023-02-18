import { VehicleTypes } from '@/lib/types';
import { createSlice } from '@reduxjs/toolkit';

export type CartType = {
  item: VehicleTypes[];
  totalItem: number;
  hasOrder: boolean;
};

const initialState: CartType = {
  item: [],
  totalItem: 0,
  hasOrder: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    receiveCart(state, { payload }) {
      state.item = payload;
    },

    addItemToCart(state, { payload }) {
      state.item.push({ ...payload, amount: 1 });
    },

    removeItemFromCart(state, { payload }) {
      const newCarts = state.item.filter((cart) => cart.name !== payload.name);
      state.item = newCarts;
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
    },

    changeStatusOrder(state) {
      state.hasOrder = !state.hasOrder;
    },

    clearItem(state) {
      state.item = [];
    },
  },
});

export const cartSliceAction = cartSlice.actions;
export default cartSlice;
