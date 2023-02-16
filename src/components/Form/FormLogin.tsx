import React from 'react';
import { Buttons, Input } from '@/components/UI';
import { FormValue, LoginTypes } from '@/lib/types';
import { useForm } from 'react-hook-form';

const FormLogin: React.FC<{
  submitHandler: (data: LoginTypes) => void;
}> = ({ submitHandler }) => {
  const { handleSubmit, control, formState, setValue } = useForm<FormValue>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const guestHandler = () => {
    setValue('email', import.meta.env.VITE_EMAIL_GUEST);
    setValue('password', import.meta.env.VITE_PASSWORD_GUEST);
  };

  return (
    <form className="flex flex-col space-y-7">
      <Input
        type="text"
        label="Email address"
        placeholder="email@domain.com"
        form={{
          control,
          name: 'email',
          rules: {
            required: 'Email field is required',
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
              message: 'Email must be a valid email',
            },
          },
        }}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Your password"
        form={{
          control,
          name: 'password',
          rules: {
            required: 'Password field is required',
            pattern: {
              value: /^(?=.*[A-Z])[\w@$!%*?&]{3,10}$/g,
              message:
                'Password must be 3 and not more than 10 characters and contain at least one capital letter',
            },
          },
        }}
      />
      <Buttons
        type="submit"
        title="Sign in"
        isPrimary
        isFull
        onClick={handleSubmit(submitHandler)}
      >
        {formState.isSubmitting ? 'Loading...' : 'Sign in'}
      </Buttons>
      <p
        className="text-xs text-center hover:underline cursor-pointer hover:text-primary-light/60"
        onClick={guestHandler}
      >
        Continue as a guest
      </p>
    </form>
  );
};

export default FormLogin;
