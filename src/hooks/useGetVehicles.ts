import { useEffect, useState } from 'react';
import useSWR from 'swr';
import service from '../lib/service';

export default function useGetVehicles(page: number) {
  const { data, error, isLoading } = useSWR(
    `vehicles/?page=${page}`,
    service.fetchVehicles
  );
  const [vehicles, setVehicles] = useState<any>({
    results: [],
    count: 0,
    next: null,
  });

  useEffect(() => {
    if (data && !error) {
      setVehicles(data.data.data);
    }
  }, [data]);

  return { vehicles, isLoading, error };
}
