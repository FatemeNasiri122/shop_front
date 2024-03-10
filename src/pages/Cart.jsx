import classes from '../styles/components/Cart.module.scss';
import TopCart from '../components/TopCart';
import React from 'react';
import { useState } from 'react';
import CartStep1 from '../components/CartStep1';
import CartStep2 from '../components/CartStep2';
import CartCheckout from '../components/CartCheckout';
import { useDispatch, useSelector } from 'react-redux';
import EmptyState from '../components/EmptyState';
import Grid from '@mui/material/Grid';
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import { openSnackbar } from '../app/features/snackbar/snackSlice';

const Cart = () => {
  const { user } = useSelector((state) => state.user);
  const [steps, setSteps] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState({});
  const dispatch = useDispatch();

  console.log(selectedAddress);
  const changeStep = () => {
    if (steps === 0) {
      setSteps(1);
      return;
    }
    if (steps === 1 && Object.keys(selectedAddress).length !== 0) {
      setSteps(2);
    } else {
      dispatch(openSnackbar({type: "error", message: "please select address"}))    
    }
  };

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" className='breadCrumLink'>Home</Link>
        <span className='breadCrumText'>Cart</span>
      </Breadcrumbs>
      {user.cart.items.length > 0 ? (
        <>
          <div className={classes.registerContainer}>
            <TopCart
              isFirstActive={steps <= 2}
              isSecondActive={steps >= 1}
              isThirdActive={steps === 2}
            />
          </div>
          <Grid container marginTop={2}>
            {steps === 0 && <CartStep1 setSteps={setSteps} />}
            {steps === 1 && (
              <CartStep2
                setSteps={setSteps}
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
              />
            )}
            {steps <= 1 && (
              <Grid item xs={12} lg={3} md={4}>
                <div className={classes.summaryContainer}>
                  <h4>ORDER SUMMARY</h4>
                  <p>
                    TOTAL AMOUNT <span>${user.cart.totalPrice}</span>
                  </p>
                  <p>
                    SHIPPING<span>0</span>
                  </p>
                  <p>
                    <strong>ORDER TOTAL</strong>
                    <strong>{user.cart.totalOrders}</strong>
                  </p>
                  <button className={classes.btn} onClick={() => changeStep()}>
                    next
                  </button>
                </div>
              </Grid>
            )}
          </Grid>
          {steps === 2 && <CartCheckout setSteps={setSteps} selectedAddress={selectedAddress} />}
        </>
      ) : (
        <EmptyState data="cart" />
      )}
    </>
  );
};

export default Cart;
