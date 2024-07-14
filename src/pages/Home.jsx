import React from 'react';
import HomeClass from '../styles/components/Home.module.scss';
import SuggestedProducts from '../components/product/SuggestedProducts.jsx';
import CartContainer from '../components/cart/CartContainer.jsx';
import SpecialOffer from '../components/product/SpecialOffer.jsx';
import ProductCategories from '../components/product/ProductCategories.jsx';

const Home = () => {
  return (
    <div className={HomeClass.bodymain}>
      <div className={HomeClass.salesec}>
        <div className={HomeClass.slogan}>
          <h1>Welcome to our website</h1>
        </div>
      </div>
      <SuggestedProducts />
      <CartContainer />
      <SpecialOffer />
    </div>
  );
};

export default Home;
