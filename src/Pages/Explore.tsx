import React, { useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import ExploreCard from '@/components/ExploreCard';
import { asyncGetVehicles } from '@/store/vehicles/action';
import { vehiclesSliceAction } from '@/store/vehicles';
import { VehicleTypes } from '@/lib/types';
import {
  asyncAddItemToCart,
  asyncRemoveItemFromCart,
} from '@/store/shared/action';

const Explore = () => {
  const firstRender = useRef(true);
  const dispatch = useAppDispatch();
  const { vehicles } = useAppSelector((state) => state);
  const { currentPage, results, next } = vehicles;

  useEffect(() => {
    if (firstRender.current) {
      dispatch(vehiclesSliceAction.unsetVehicles());
    }

    return () => {
      firstRender.current = false;
    };
  }, []);

  useEffect(() => {
    if (!firstRender.current) {
      dispatch(asyncGetVehicles(currentPage));
    }
  }, [currentPage]);

  const fetchMoreData = () => {
    dispatch(vehiclesSliceAction.increasePage());
  };

  const addItemToCart = ({ name, passengers, model }: VehicleTypes) => {
    dispatch(asyncAddItemToCart({ name, passengers, model }));
  };

  const removeItemFromCart = (name: string) => {
    dispatch(asyncRemoveItemFromCart(name));
  };

  return (
    <InfiniteScroll
      className="scrollbar-hide"
      dataLength={results.length}
      hasMore={!!next}
      next={fetchMoreData}
      loader={<p className="text-center mt-8">Loading...</p>}
      height="100vh"
    >
      <div className="grid grid-cols-2 gap-4">
        {results.map((vehicle: any, index: number) => (
          <ExploreCard
            key={index}
            name={vehicle.name}
            passengers={vehicle.passengers}
            model={vehicle.model}
            hasAddToCart={vehicle.hasAddToCart}
            onAddCart={addItemToCart}
            onRemoveCart={removeItemFromCart}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Explore;
