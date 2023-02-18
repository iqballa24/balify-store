import toast from 'react-hot-toast';
import { Dispatch } from '@reduxjs/toolkit';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { authSliceAction } from '@/store/auth';
import { auth } from '@/lib/service/firebase/config';
import { getUserById } from '@/lib/service/firebase/API';
import { cartSliceAction } from '@/store/cart';

function unSetAuthUser() {
  return async (dispatch: Dispatch) => {
    signOut(auth);
    dispatch(cartSliceAction.clearItem());
    dispatch(authSliceAction.unSetCurrentUser());
  };
}

function asyncPreloaderProcess() {
  return async (dispatch: Dispatch) => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid } = user;

        try {
          dispatch(showLoading());
          const res = await getUserById(uid);
          const { name, phone, address, email } = res[0];

          dispatch(
            authSliceAction.setCurrentUser({
              name,
              email,
              uid,
              address,
              phone,
            })
          );
        } catch (err) {
          dispatch(authSliceAction.unSetCurrentUser());

          if (err instanceof Error) {
            console.log(err.message);
          } else {
            console.log('Unexpected error', err);
          }
          toast.error('Opss, something went wrong');
        } finally {
          dispatch(hideLoading());
        }
      } else {
        dispatch(authSliceAction.unSetCurrentUser());
      }
    });

    unsubscribe();
  };
}

export { unSetAuthUser, asyncPreloaderProcess };
