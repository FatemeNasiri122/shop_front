import React from 'react';
import HomeClass from '../styles/components/Home.module.scss';
import SuggestedProducts from '../components/product/SuggestedProducts.jsx';
import CartContainer from '../components/cart/CartContainer.jsx';
import SpecialOffer from '../components/product/SpecialOffer.jsx';
import ProductCategories from '../components/product/ProductCategories.jsx';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  return (
    <div className={HomeClass.bodymain}>
      <div className={HomeClass.salesec}>
        <div className={HomeClass.slogan}>
          <h1>Welcome to our website</h1>
        </div>
      </div>
      <ProductCategories />
      <SuggestedProducts />
      <CartContainer />
      <SpecialOffer />
    </div>
  );
};

export default Home;
