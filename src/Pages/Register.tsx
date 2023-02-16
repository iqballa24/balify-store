import React from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import LeanImg from '@/assets/lean.png';
import FormRegister from '@/components/Form/FormRegister';
import { RegisterTypes } from '@/lib/types';
import { useAppDispatch } from '@/hooks/useRedux';
import { asyncRegisterUser } from '@/store/auth/action';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submitHandler = async (data: RegisterTypes) => {
    const { email, password, name } = data;

    try {
      const { error } = await dispatch(
        asyncRegisterUser({ email, password, name })
      );

      if (error) return;

      setTimeout(() => {
        navigate('/');
      }, 4000);
    } catch (err) {
      toast.error('Register failed');
    }
  };

  return (
    <section className="flex flex-col w-full max-w-lg h-full">
      <div className="flex flex-col px-5 py-6">
        <div className="flex flex-row justify-end">
          <Link to="/sign-in" className="text-white text-xs">
            Sign in
          </Link>
        </div>
        <img src={LeanImg} className="w-48 py-2 mx-auto" />
        <h1 className="text-xl text-white font-bold py-2">Create account</h1>
        <p className="text-white text-lg">To get started now!</p>
      </div>
      <div className="bg-white w-full h-full px-8 pt-9 rounded-t-3xl overflow-scroll scrollbar-hide">
        <FormRegister submitHandler={submitHandler} />
      </div>
    </section>
  );
};

export default Register;
