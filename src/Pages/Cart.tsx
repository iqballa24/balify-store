import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartCard from '@/components/CartCard';
import { useAppSelector } from '@/hooks/useRedux';

import emptyImg from '@/assets/Saly-22.png';
import { Buttons, Modal } from '@/components/UI';
import ListOrder from '@/components/ListOrder';

const Cart = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { item: Carts } = useAppSelector((state) => state.cart);

  if (Carts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        <img src={emptyImg} alt="" className="max-w-[240px]" />
        <span className="text-sm">You have no items in your cart</span>
        <Buttons
          title="buy-now"
          type="button"
          isSecondary
          onClick={() => navigate('/explore')}
        >
          Buy item
        </Buttons>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between h-full gap-5">
      <div className="flex flex-col gap-4">
        {Carts.map((cart, index) => (
          <CartCard key={index} data={cart} />
        ))}
      </div>
      <Buttons
        title="Review"
        type="button"
        isPrimary
        isFull
        onClick={() => setShowModal(true)}
      >
        Review
      </Buttons>
      <Modal
        title="Review"
        isShow={showModal}
        onClose={() => setShowModal((prev) => !prev)}
        content={<ListOrder />}
      />
    </div>
  );
};

export default Cart;
