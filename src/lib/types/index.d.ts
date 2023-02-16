import { IconType } from 'react-icons/lib';

export type menuTypes = {
  id: number;
  name: string;
  icon: IconType;
  path: string;
};

export type UserTypes = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type FormValue = {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
};

export type RegisterTypes = {
  name: string;
  email: string;
  password: string;
};

export type LoginTypes = {
  email: string;
  password: string;
};

export type VehicleTypes = {
  name: string;
  passengers: number | string;
  model: string;
  amount?: number;
};
