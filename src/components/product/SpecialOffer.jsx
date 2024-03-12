import Product from './Product.jsx';
import { getSuggestedProducts } from '../../api/product.js';
import { useQuery } from '@tanstack/react-query';
import { SwiperSlide } from 'swiper/react';
import SwiperContainer from '../helper/SwiperContainer.jsx';
import OfferCounter from './OfferCounter.jsx';
import LoadingState from '../helper/LoadingState.jsx';

const SpecialOffer = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['suggested-products'],
    queryFn: async () => getSuggestedProducts()
  });

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <>
      <div className="offer-header">
        <h4 className="leftTitle">special offer</h4>
        <OfferCounter />
      </div>
      <SwiperContainer>
        {data?.products?.map((product) => (
          <SwiperSlide key={product._id}>
            <Product data={product} key={product?._id} />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </>
  );
};

export default SpecialOffer;
