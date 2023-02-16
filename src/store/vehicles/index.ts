import { VehicleTypes } from '@/lib/types';
import { createSlice } from '@reduxjs/toolkit';

export type VehiclesType = {
  results: VehicleTypes[];
  count: number;
  next: null | string;
  currentPage: number;
};

const initialState: VehiclesType = {
  results: [],
  count: 0,
  next: null,
  currentPage: 1,
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setVehicles(state, { payload }) {
      state.results.push(...payload.results);
      state.count = payload.count;
      state.next = payload.next;
    },
    unsetVehicles(state) {
      state.results = [];
      state.count = 0;
      state.next = null;
      state.currentPage = 1;
    },
    increasePage(state) {
      state.currentPage = state.currentPage + 1;
    },
    vehicleAddToCart(state, { payload }) {
      const newVehicles = state.results.map((vehicle: VehicleTypes) => {
        if (vehicle.name === payload.name) {
          return {
            ...vehicle,
            hasAddToCart: true,
          };
        } else {
          return { ...vehicle };
        }
      });

      state.results = newVehicles;
    },
    vehicleRemoveFromCart(state, { payload }) {
      const newVehicles = state.results.map((vehicle: VehicleTypes) => {
        if (vehicle.name === payload.name) {
          return {
            ...vehicle,
            hasAddToCart: false,
          };
        } else {
          return { ...vehicle };
        }
      });

      state.results = newVehicles;
    },
  },
});

export const vehiclesSliceAction = vehiclesSlice.actions;
export default vehiclesSlice;
