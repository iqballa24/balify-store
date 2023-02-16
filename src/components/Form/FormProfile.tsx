import React from 'react';
import { useForm } from 'react-hook-form';
import { FormValue, UserTypes } from '@/lib/types';
import { Buttons, Input } from '@/components/UI';
import { useAppSelector } from '@/hooks/useRedux';

type FormType = {
  submitHandler: (uid: string, data: UserTypes) => void;
};

const FormProfile: React.FC<FormType> = ({ submitHandler }) => {
  const { user } = useAppSelector((state) => state.auth);
  const { handleSubmit, control, formState } = useForm<FormValue>({
    defaultValues: {
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
    },
    mode: 'onChange',
  });

  return (
    <form className="flex flex-col space-y-7 py-8">
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
        type="text"
        label="Phone number"
        placeholder="8128xxxxxx"
        form={{
          control,
          name: 'phone',
          rules: {
            required: 'Phone number field is required',
            pattern: {
              value: /^[1-9][0-9]{9,12}$/,
              message: 'Invalid phone number',
            },
          },
        }}
      />
      <Input
        type="text"
        label="Address"
        placeholder="Your address"
        form={{
          control,
          name: 'address',
          rules: {
            required: 'Address field is required',
          },
        }}
      />
      <Buttons
        type="submit"
        title="Save"
        isPrimary
        isFull
        onClick={handleSubmit((data) => submitHandler(user.uid, data))}
      >
        {formState.isSubmitting ? 'Loading...' : 'Save'}
      </Buttons>
    </form>
  );
};

export default FormProfile;
