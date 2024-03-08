import HomeClass from '../styles/components/Home.module.scss';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { getSuggestedProducts } from '../api/product';
import { useQuery } from '@tanstack/react-query';
import { SwiperSlide } from 'swiper/react';
import SwiperContainer from './SwiperContainer';

const SuggestedProducts = () => {
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
      <h1 className="title">suggested products</h1>
      <Grid container>
        <SwiperContainer>
          {data?.products?.map((product) => (
            <SwiperSlide key={product._id}>
              <Product data={product} key={product?._id} />
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </Grid>
    </>
  );
};

export default SuggestedProducts;
