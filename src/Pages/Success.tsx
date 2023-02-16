import React, { useEffect } from 'react';
import successImg from '@/assets/success.png';
import { Buttons } from '@/components/UI';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { cartSliceAction } from '@/store/cart';

const Success = () => {
  const { hasOrder } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasOrder) {
      return navigate('/');
    }
  }, []);

  const backHandler = () => {
    navigate('/')
    dispatch(cartSliceAction.changeStatusOrder());
  };

  return (
    <div className="absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 flex flex-col gap-5">
      <img src={successImg} alt="" className="w-full max-w-[140px]" />
      <span>Yay, order success</span>
      <Buttons
        type="button"
        title="back"
        isPrimary
        onClick={backHandler}
      >
        Back
      </Buttons>
    </div>
  );
};

export default Success;
