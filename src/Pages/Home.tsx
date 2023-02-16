import React from 'react';
import Skeleton from 'react-loading-skeleton';
import GreetingsCard from '@/components/GreetingsCard';
import ProfileCard from '@/components/ProfileCard';
import useGetQuote from '@/hooks/useGetQuote';
import { useAppSelector } from '@/hooks/useRedux';

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { quote, isLoading } = useGetQuote('random');

  return (
    <React.Fragment>
      {isLoading ? (
        <Skeleton height={160} />
      ) : (
        <GreetingsCard name={user.name} quote={quote} />
      )}
      <ProfileCard user={user} />
    </React.Fragment>
  );
};

export default Home;
