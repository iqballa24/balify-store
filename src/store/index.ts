import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import AuthSlice from '@/store/auth';
import vehiclesSlice from '@/store/vehicles';
import cartSlice from '@/store/cart';

const store = configureStore({
  reducer: {
    loadingBar: loadingBarReducer,
    auth: AuthSlice.reducer,
    vehicles: vehiclesSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
