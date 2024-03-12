import Grid from '@mui/material/Grid';
import ShoppingCart from './ShoppingCart.jsx';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CartStep1 = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Grid item xs={12} lg={9} md={8}>
      {user?.cart?.items?.map((item) => (
        <ShoppingCart key={item._id} data={item} />
      ))}
    </Grid>
  );
};

export default CartStep1;
