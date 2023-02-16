import React from 'react';
import { Buttons, Input } from '@/components/UI';
import { FormValue, RegisterTypes } from '@/lib/types';
import { useForm } from 'react-hook-form';

const FormRegister: React.FC<{
  submitHandler: (data: RegisterTypes) => void;
}> = ({ submitHandler }) => {
  const { handleSubmit, control, formState } = useForm<FormValue>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  return (
    <form className="flex flex-col space-y-7">
      <Input
        type="text"
        label="Name"
        placeholder="Your name"
        form={{
          control,
          name: 'name',
          rules: {
            required: 'Name field is required',
            pattern: {
              value: /^[a-zA-Z0-9_ ]{3,30}$/,
              message: 'Name must be be 3 and not more than 30 characters',
            },
          },
        }}
      />
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
        title="Sign up"
        isPrimary
        isFull
        onClick={handleSubmit(submitHandler)}
      >
        {formState.isSubmitting ? 'Loading...' : 'Sign up'}
      </Buttons>
    </form>
  );
};

export default FormRegister;
