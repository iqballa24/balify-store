import React from 'react';
import { Buttons } from '@/components/UI';
import { MdOutlineChair } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { VehicleTypes } from '@/lib/types';

type Props = {
  name: string;
  passengers: string;
  model: string;
  onAddCart: ({ name, passengers, model }: VehicleTypes) => void;
  onRemoveCart: (name: string) => void;
  hasAddToCart: boolean;
};

const ExploreCard: React.FC<Props> = ({
  name,
  passengers,
  model,
  hasAddToCart,
  onAddCart,
  onRemoveCart,
}) => {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-sm bg-white">
      <div className="bg-gradient-to-br from-primary to-primary-light h-28"></div>
      <div className="flex flex-col justify-between gap-5 p-3">
        <div className="flex flex-col gap-2">
          <span className="text-base mb-1">{name}</span>
          <div className="text-xs flex flex-row items-center gap-2">
            <MdOutlineChair className="w-1/12" />
            <span className="w-10/12">{passengers} passengers</span>
          </div>
          <div className="text-xs flex flex-row items-center gap-2 truncate">
            <AiFillCar className="w-1/12" />
            <span className="w-10/12">{model}</span>
          </div>
        </div>
        {hasAddToCart ? (
          <Buttons
            type="button"
            title="remove cart"
            isDanger
            onClick={() => onRemoveCart(name)}
          >
            Remove
          </Buttons>
        ) : (
          <Buttons
            type="button"
            title="Add to cart"
            isSecondary
            onClick={() => onAddCart({ name, passengers, model })}
          >
            Add to cart
          </Buttons>
        )}
      </div>
    </div>
  );
};

export default ExploreCard;
