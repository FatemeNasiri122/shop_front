import classes from '../styles/components/aboutus.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs, Grid } from '@mui/material';
import aboutus from '/assets/img/aboutus.jpg';

const AboutUS = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" className="breadCrumLink">
          Home
        </Link>
        <span className="breadCrumText">about </span>
      </Breadcrumbs>
      <div className={classes.AboutUSContainer}>
        <h1 className={classes.title}>
          Discover Your Style, Shop Online.
        </h1>
      </div>
      <div className={classes.aboutImageContainer}>
        <img loading="lazy" src={aboutus} alt="about us" />
      </div>

      <div className={classes.cart}>
        <h2>
          about us
        </h2>
        <p>
          Welcome to our clothing shop, where fashion meets passion! We specialize in offering trendy, high-quality clothing that fits your unique style and personality. Our mission is to provide you with the latest fashion at affordable prices, ensuring you look and feel your best. With a commitment to sustainability and ethical practices, we strive to make a positive impact on the world. Join us on this stylish journey and discover your new favorite outfits today!
        </p>

      </div>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item md={5} >
          <Link
            className="btn"
            to="/products">
            shop now
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUS;
