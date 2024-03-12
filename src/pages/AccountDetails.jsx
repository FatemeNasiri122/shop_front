import classes from '../styles/components/AccountTitles.module.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Breadcrumbs } from '@mui/material';
import AccountDetailsForm from '../components/account/AccountDetailsForm.jsx';
import OrdersListContainer from '../components/account/OrdersListContainer.jsx';
import FavoriteAccount from '../components/account/FavoriteProduct.jsx';
import AccountAddress from '../components/account/AccountAddress.jsx';
import ChangePassword from '../components/account/ChangePassword.jsx';

const AccountDetails = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" className="breadCrumLink">
          home
        </Link>
        <span className="breadCrumText">account details</span>
      </Breadcrumbs>
      <h1 className={classes.title}>my account</h1>
      <Grid container>
        <Grid item xs={12} md={3}>
          <div className={classes.containerTitles}>
            <ul className={classes.ulTitles}>
              <li onClick={() => setActive(0)} className={active === 0 && classes.active}>
                account details
              </li>
              <li onClick={() => setActive(1)} className={active === 1 && classes.active}>
                orders list
              </li>
              <li onClick={() => setActive(2)} className={active === 2 && classes.active}>
                favorite products
              </li>
              <li onClick={() => setActive(3)} className={active === 3 && classes.active}>
                addresses
              </li>
              <li onClick={() => setActive(4)} className={active === 4 && classes.active}>
                change password
              </li>
            </ul>
          </div>
        </Grid>
        {active === 0 && <AccountDetailsForm />}
        {active === 1 && <OrdersListContainer />}
        {active === 2 && <FavoriteAccount />}
        {active === 3 && <AccountAddress />}
        {active === 4 && <ChangePassword />}
      </Grid>
    </>
  );
};

export default AccountDetails;
