import { APIRandomQuote, APISwapi } from './interceptor';

const fetchRandomQuote = async (url: string) => {
  try {
    const res = await APIRandomQuote.get(url);
    return { data: res.data };
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error('Opss, something went wrong');
    }
  }
};

const fetchVehicles = async (url: string) => {
  try {
    const res = await APISwapi.get(url);

    if (res.status !== 200) {
      console.log('tester');
      throw Error('Request failed');
    }

    return { data: res };
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error('Opss, something went wrong');
    }
  }
};

export default { fetchRandomQuote, fetchVehicles };
