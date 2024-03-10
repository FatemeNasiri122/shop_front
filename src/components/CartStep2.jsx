import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useSelector } from 'react-redux';
import { Button, Grid } from '@mui/material';
import classes from '../styles/components/Cart.module.scss';
import { Link } from 'react-router-dom';
import { Add, PlusOne } from '@mui/icons-material';

const CartStep2 = ({ setSelectedAddress, selectedAddress }) => {
  const { user } = useSelector((state) => state.user);
  console.log(selectedAddress);
  return (
    <Grid item xs={12} lg={9} md={8} sx={{ padding: '16px' }}>
      <div className={classes.infoContainer}>
        <span>
          <span>first name:</span> <span className={classes.infoText}>{user.firstName}</span>
        </span>
        <span>
          <span>last name:</span> <span className={classes.infoText}>{user.lastName}</span>
        </span>
        <span>
          <span>email:</span> <span className={classes.infoText}>{user.email}</span>
        </span>
        <span>
          <span>phone number:</span> <span className={classes.infoText}>{user.phoneNumber}</span>
        </span>
        <span>
          <span>country:</span> <span className={classes.infoText}>{user.country}</span>
        </span>
        <span>
          <span>city:</span> <span className={classes.infoText}>{user.city}</span>
        </span>
      </div>

      <p className={classes.addressTitle}>َPlease choose your address</p>
      {user.address.items.length === 0 ? (
        <div className={classes.center}>
          <div>
          <p className={classes.noAddress}>no address found</p>
          <Link to="/account-details">
            <Button variant="contained" startIcon={<Add />}>
              add address
            </Button>
          </Link>
          </div>
        </div>
      ) : (
        <div className={classes.addressContainer}>
          <FormControl>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
              {user.address.items.map((a) => (
                <div key={a._id}>
                  <FormControlLabel
                    value={a.name}
                    control={<Radio />}
                    label={a.name}
                    onChange={(e) => {
                      e.preventDefault();
                      setSelectedAddress(a);
                    }}
                  />
                </div>
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      )}
    </Grid>
  );
};

export default CartStep2;
