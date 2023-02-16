import toast from 'react-hot-toast';
import { Dispatch } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

import service from '@/lib/service';
import { VehicleTypes } from '@/lib/types';
import { vehiclesSliceAction } from '@/store/vehicles';
import { RootState } from '@/store';

function asyncGetVehicles(page: number) {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { cart } = getState();
    try {
      dispatch(showLoading());

      const res = await service.fetchVehicles(`vehicles/?page=${page}`);

      const { results, next, count } = res.data.data;

      const carts = cart.item.map((item: VehicleTypes) => item.name);

      const vehicles = results.map((item: VehicleTypes) => {
        const hasAddToCart = carts.includes(item.name);

        return { ...item, hasAddToCart };
      });

      dispatch(
        vehiclesSliceAction.setVehicles({ results: vehicles, next, count })
      );
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('Something went wrong');
      }
      console.log('Unexpected error', err);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { asyncGetVehicles };
