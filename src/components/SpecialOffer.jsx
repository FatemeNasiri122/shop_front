import Product from './Product';
import { getSuggestedProducts } from '../api/product';
import { useQuery } from '@tanstack/react-query';
import { SwiperSlide } from 'swiper/react';
import SwiperContainer from './SwiperContainer';
import OfferCounter from './OfferCounter';

const SpecialOffer = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['suggested-products'],
    queryFn: async () => getSuggestedProducts()
  });

  if (isLoading) {
    return <span>loading...</span>;
  }
  if (isError) {
    return <span>error</span>;
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
