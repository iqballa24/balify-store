import { useEffect, useState } from 'react';
import useSWR from 'swr';
import service from '../lib/service';

export default function useGetQuote(url: string) {
  const { data, error, isLoading } = useSWR(url, service.fetchRandomQuote);
  const [quote, setQuote] = useState({ author: '', content: '' });

  useEffect(() => {
    if (data && !error) {
      setQuote(data.data);
    }
  }, [data]);

  return { quote, isLoading };
}
