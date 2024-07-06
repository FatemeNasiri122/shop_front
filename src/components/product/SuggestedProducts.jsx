import Grid from '@mui/material/Grid';
import Product from './Product.jsx';
import { getSuggestedProducts } from '../../api/product.js';
import { useQuery } from '@tanstack/react-query';
import LoadingState from '../helper/LoadingState.jsx';
import { Link } from 'react-router-dom';

const SuggestedProducts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['suggested-products'],
    queryFn: async () => getSuggestedProducts()
  });
  if (isLoading) {
    return <LoadingState />;
  }
  return (
    <>
      <h1 className="title">our products</h1>
      <Grid container spacing={2} marginTop="10px">
        {data?.products?.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product?._id}>
            <Product data={product} />
          </Grid>
        ))}

      </Grid>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item md={5} >
          <Link
            className="btn"
            to="/products">
            view all products
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default SuggestedProducts;
