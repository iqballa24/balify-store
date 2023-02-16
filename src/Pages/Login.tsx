import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import FormLogin from '@/components/Form/FormLogin';
import RocketImg from '@/assets/rocket.png';
import { LoginTypes } from '@/lib/types';
import { useAppDispatch } from '@/hooks/useRedux';
import { asyncLoginUser } from '@/store/auth/action';

const Login = () => {
  const dispatch = useAppDispatch();

  const submitHandler = async(data: LoginTypes) => {
    const { email, password } = data;
    await dispatch(asyncLoginUser({ email, password }));
  };

  return (
    <section className="flex flex-col w-full max-w-lg h-full">
      <div className="flex flex-col px-5 py-6">
        <div className="flex flex-row justify-end">
          <Link to="/sign-up" className="text-white text-xs">
            Sign up
          </Link>
        </div>
        <img src={RocketImg} className="w-48 py-2 mx-auto" />
        <h1 className="text-xl text-white font-bold py-2">Sign in</h1>
        <p className="text-white text-lg">Welcome back! Glad to see you</p>
      </div>
      <div className="bg-white w-full h-full px-8 pt-9 rounded-t-3xl overflow-scroll scrollbar-hide">
        <FormLogin submitHandler={submitHandler}/>
      </div>
    </section>
  );
};

export default Login;
