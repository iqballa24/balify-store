import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import { MdOutlineChair } from 'react-icons/md';
import { VehicleTypes } from '@/lib/types';
import { useAppDispatch } from '@/hooks/useRedux';
import { cartSliceAction } from '@/store/cart';
import { SpinBox } from '@/components/UI';

type Props = {
  data: VehicleTypes;
};

const CartCard: React.FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();

  const increaseHandler = () => {
    dispatch(cartSliceAction.increaseItemCart({ name: data.name }));
  };

  const decreaseHandler = () => {
    dispatch(cartSliceAction.decreseItemCart({ name: data.name }));
  };

  return (
    <div className="w-full flex flex-row gap-3 overflow-hidden">
      <div className="w-4/12 bg-gradient-to-br from-primary to-primary-light h-28 rounded-xl"></div>
      <div className="w-8/12 flex flex-row justify-between gap-5 p-3">
        <div className="flex flex-col gap-2">
          <span className="text-base mb-1">{data.name}</span>
          <div className="text-xs flex flex-row items-center gap-2">
            <MdOutlineChair className="w-1/12" />
            <span className="w-10/12">{data.passengers} passengers</span>
          </div>
          <div className="text-xs flex flex-row items-center gap-2 truncate">
            <AiFillCar className="w-1/12" />
            <span className="w-10/12">{data.model}</span>
          </div>
        </div>
        <SpinBox
          count={data.amount!}
          increaseHandler={increaseHandler}
          decreaseHandler={decreaseHandler}
        />
      </div>
    </div>
  );
};

export default CartCard;
