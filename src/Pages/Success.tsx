import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import successImg from '@/assets/success.png';
import { Buttons } from '@/components/UI';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { cartSliceAction } from '@/store/cart';

const portalElement = document.getElementById('overlays') as HTMLElement;

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
    navigate('/');
    dispatch(cartSliceAction.changeStatusOrder());
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className="fixed w-full max-w-sm h-[100vh] bg-white top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 z-20 flex flex-col justify-center items-center p-8 gap-5">
          <img src={successImg} alt="" className="w-full max-w-[140px]" />
          <span>Yay, order success</span>
          <Buttons type="button" title="back" isPrimary onClick={backHandler}>
            Back
          </Buttons>
        </div>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Success;
