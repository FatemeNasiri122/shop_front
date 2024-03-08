import React from 'react';
import HomeClass from '../styles/components/Home.module.scss';
import SuggestedProducts from '../components/SuggestedProducts';
import CartContainer from '../components/CartContainer';
import SpecialOffer from '../components/SpecialOffer';
import ProductCategories from '../components/ProductCategories';
import PreLoading from '../components/PreLoading';

const Home = () => {
  return (
    <div className={HomeClass.bodymain}>
      <div className={HomeClass.salesec}>
        <div className={HomeClass.slogan}>
          <h1>welcome to our website</h1>
        </div>
      </div>
      {/* <PreLoading /> */}
      <ProductCategories />
      <SuggestedProducts />
      <CartContainer />
      <SpecialOffer />
    </div>
  );
};

export default Home;
