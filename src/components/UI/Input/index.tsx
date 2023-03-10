import React, { useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { FormValue } from '@/lib/types';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

type InputProps = {
  form: UseControllerProps<FormValue>;
  label: string;
  placeholder: string;
  type: string;
};

const Input: React.FC<InputProps> = ({ label, form, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { field, fieldState } = useController(form);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const passwordType = showPassword ? 'text' : 'password';

  return (
    <div className="relative flex flex-col space-y-3">
      <label className="font-light text-sm" htmlFor="name">
        {label}
      </label>
      <input
        id={label}
        type={type === 'password' ? passwordType : type}
        {...field}
        placeholder={placeholder}
        className="bg-transparent border py-3 px-4 rounded-xl placeholder:text-gray-400 placeholder:text-sm placeholder:font-light"
      />
      {type === 'password' && (
        <div
          className="absolute top-11 -translate-y-2/4 right-2 p-2 md:p-3 rounded-md cursor-pointer hover:text-cyan "
          onClick={toggleShowPassword}
        >
          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </div>
      )}
      {fieldState.error && (
        <p className="text-red-500 text-xs">{fieldState.error.message}</p>
      )}
    </div>
  );
};

export default React.memo(Input);
