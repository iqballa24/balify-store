import React, { useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import ExploreCard from '@/components/ExploreCard';
import { VehicleTypes } from '@/lib/types';
import { cartSliceAction } from '@/store/cart';
import { vehiclesSliceAction } from '@/store/vehicles';
import { asyncGetVehicles } from '@/store/vehicles/action';

const Explore = () => {
  const firstRender = useRef(true);
  const dispatch = useAppDispatch();
  const { currentPage, results, next } = useAppSelector(
    (state) => state.vehicles
  );

  useEffect(() => {
    if (firstRender.current) {
      dispatch(vehiclesSliceAction.unsetVehicles());
    }

    return () => {
      firstRender.current = false;
    };
  }, []);

  useEffect(() => {
    dispatch(asyncGetVehicles(currentPage));
  }, [currentPage]);

  const fetchMoreData = () => {
    dispatch(vehiclesSliceAction.increasePage());
  };

  const addItemToCart = ({ name, passengers, model }: VehicleTypes) => {
    dispatch(cartSliceAction.addItemToCart({ name, passengers, model }));
    dispatch(vehiclesSliceAction.vehicleAddToCart({ name }));
  };

  const removeItemFromCart = (name: string) => {
    dispatch(cartSliceAction.removeItemFromCart({ name }));
    dispatch(vehiclesSliceAction.vehicleRemoveFromCart({ name }));
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
