import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes as RRDRoutes } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes.jsx';

const Layout = React.lazy(() => import('./Layout/index.jsx'));
const Home = React.lazy(() => import('./pages/Home.jsx'));
const SigninOrRegister = React.lazy(() => import('./pages/SigninOrRegister.jsx'));
const Products = React.lazy(() => import('./pages/Products.jsx'));
const Product = React.lazy(() => import('./pages/Product.jsx'));
const Cart = React.lazy(() => import('./pages/Cart.jsx'));
const ContactUs = React.lazy(() => import('./pages/ContactUs.jsx'));
const AboutUs = React.lazy(() => import('./pages/AboutUs.jsx'));
const News = React.lazy(() => import('./pages/News.jsx'));
const NewsViewMore = React.lazy(() => import('./pages/NewsViewMore.jsx'));
const AccountDetails = React.lazy(() => import('./pages/AccountDetails.jsx'));
const NotFound = React.lazy(() => import('./pages/NotFound.jsx'));

const Routes = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <RRDRoutes>
      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/account-details" element={<AccountDetails />} />
          <Route path="/add-to-cart/product/:id" element={<Product />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="/signin-or-register" element={!isLoggedIn && <SigninOrRegister />} />
        <Route path="/products/:type" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-view-more/:id" element={<NewsViewMore />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </RRDRoutes>
  );
};
export default Routes;
