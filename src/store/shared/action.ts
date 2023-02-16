import toast from 'react-hot-toast';
import { Dispatch } from '@reduxjs/toolkit';
import { signOut } from 'firebase/auth';
import { VehicleTypes } from '@/lib/types';
import { cartSliceAction } from '@/store/cart';
import { vehiclesSliceAction } from '@/store/vehicles';
import { authSliceAction } from '@/store/auth';
import { auth } from '@/lib/service/firebase/config';

function asyncAddItemToCart({ name, passengers, model }: VehicleTypes) {
  return async (dispatch: Dispatch) => {
    try {
      toast.success(`${name} added to cart`);
      dispatch(cartSliceAction.addItemToCart({ name, passengers, model }));
      dispatch(vehiclesSliceAction.vehicleAddToCart({ name }));
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('Ops, Something went wrong');
        console.log('Unexpected error', err);
      }
    }
  };
}

function asyncRemoveItemFromCart(name: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(cartSliceAction.removeItemFromCart({ name }));
      dispatch(vehiclesSliceAction.vehicleRemoveFromCart({ name }));
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('Ops, Something went wrong');
        console.log('Unexpected error', err);
      }
    }
  };
}

function asyncOrderItem() {
  return async (dispatch: Dispatch) => {
    try {
      await dispatch(cartSliceAction.changeStatusOrder());
      await dispatch(cartSliceAction.clearItem());
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('Ops, Something went wrong');
        console.log('Unexpected error', err);
      }
    }
  };
}

function unSetAuthUser() {
  return async (dispatch: Dispatch) => {
    signOut(auth);
    dispatch(authSliceAction.unSetCurrentUser());
    dispatch(cartSliceAction.clearItem());
  };
}

export {
  asyncAddItemToCart,
  asyncRemoveItemFromCart,
  asyncOrderItem,
  unSetAuthUser,
};
