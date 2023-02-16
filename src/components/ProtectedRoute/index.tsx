import React, { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/useRedux';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const firstRender = useRef(true);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (firstRender.current) {
      if (user.phone === '' || user.address === '') {
        toast.error('Complete your personal data first!');
        navigate('/');
      }
    }

    return () => {
      firstRender.current = false;
    };
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
