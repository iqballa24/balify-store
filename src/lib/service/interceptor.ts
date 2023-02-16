import axios from 'axios';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/service/firebase/config';

export const APIRandomQuote = axios.create({
  baseURL: 'https://api.quotable.io',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

APIRandomQuote.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/';
      signOut(auth);
    } else {
      return error.response;
    }
  }
);

export const APISwapi = axios.create({
  baseURL: 'https://swapi.dev/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

APISwapi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/';
      signOut(auth);
    } else {
      return error.response;
    }
  }
);
