import React from 'react';
import { Buttons } from '@/components/UI';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { asyncOrderItem } from '@/store/shared/action';
import { useNavigate } from 'react-router-dom';

const ListOrder = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { item } = useAppSelector((state) => state.cart);

  const orderHandler = () => {
    dispatch(asyncOrderItem());
    navigate('/order-success');
  };

  return (
    <React.Fragment>
      <ul className="flex flex-col gap-4 py-8 mb-8">
        <li className="flex flex-row justify-between bg-gray-200 p-3 mb-3 text-text">
          <span>Name</span>
          <span>Qty</span>
        </li>
        {item.map((cart, index) => (
          <li key={index} className="flex flex-row justify-between">
            <span>{cart.name}</span>
            <span>{cart.amount} x</span>
          </li>
        ))}
      </ul>
      <Buttons
        title="order"
        type="button"
        isPrimary
        isFull
        onClick={orderHandler}
      >
        Order
      </Buttons>
    </React.Fragment>
  );
};

export default ListOrder;
