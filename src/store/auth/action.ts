import { Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {
  getUserById,
  loginUser,
  registerUser,
  updateUser,
} from '@/lib/service/firebase/API';
import { LoginTypes, RegisterTypes, UserTypes } from '@/lib/types';
import { authSliceAction } from '@/store/auth';
import { unSetAuthUser } from '@/store/shared/action';

function asyncRegisterUser({ email, password, name }: RegisterTypes) {
  return async () => {
    try {
      const res = await registerUser({ email, password, name });

      toast.success('Register successfully');

      return { res, error: false };
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
      console.log(err);

      return { error: true };
    } finally {
      unSetAuthUser();
    }
  };
}

function asyncLoginUser({ email, password }: LoginTypes) {
  return async (dispatch: Dispatch) => {
    try {
      const res = await loginUser({ email, password });
      const { uid } = res.user;

      const user = await getUserById(uid);
      const { name, phone, address } = user[0];

      toast.success('Login successful');

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
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('Something went wrong');
      }
      console.log('Unexpected error', err);
    }
  };
}

function asyncUpdateUser(uid: string, data: UserTypes) {
  return async (dispatch: Dispatch) => {
    try {
      const promise = updateUser(uid, data);

      toast.promise(promise, {
        loading: 'Loading..',
        success: 'Saved',
        error: 'Failed',
      });

      await promise;
      await dispatch(authSliceAction.updateCurrentUser(data));

      return { error: false };
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('Ops, Something went wrong');
        console.log('Unexpected error', err);
      }

      return { error: true };
    }
  };
}

export { asyncRegisterUser, asyncLoginUser, asyncUpdateUser, unSetAuthUser };
