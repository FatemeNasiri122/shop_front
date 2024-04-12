import React, { useEffect, useState } from 'react';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import Collapse from '@mui/material/Collapse';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderClass from '../styles/Layout/Header.module.scss';
import logo from '/assets/img/logo-no-background.svg';

const Header = () => {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const nav = useNavigate();
  const [checked, setChecked] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    if (user?.cart) {
      let counts = user.cart.items.reduce((accumulator, item) => accumulator + item.count, 0);
      setCartItems(counts);
    }
  }, [user]);
  const closeMenu = (url) => {
    nav(url);
    setChecked(false);
  };

  return (
    <>
      <nav className={HeaderClass.headerMain}>
        <div className={HeaderClass.content}>
          <div className={HeaderClass.profileSec}>
            <Link to="/products">our products</Link>
          </div>
          <div className={HeaderClass.nav}>
            <div className={HeaderClass.logoContainer}>
              <img src={logo} alt="logo" loading="lazy" />
            </div>
          </div>
          <div className={HeaderClass.profileSec}>
            {isLoggedIn ? (
              <Link to="/account-details">
                <PersonOutlineOutlinedIcon />
              </Link>
            ) : (
              <Link to="/signin-or-register">register / sign in </Link>
            )}
            {isLoggedIn && (
              <Link to="/cart">
                <Badge badgeContent={cartItems} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
            )}
          </div>
        </div>
        <div>
          <div className={HeaderClass.mobileNav}>
            <button
              className={HeaderClass.hamburgerButton}
              onClick={() => setChecked((prev) => !prev)}>
              <LunchDiningIcon />
            </button>
            <span className={HeaderClass.center}>
              {isLoggedIn ? (
                <Link to="/account-details">
                  <PersonOutlineOutlinedIcon sx={{ marginTop: '4px' }} />
                </Link>
              ) : (
                <Link to="/signin-or-register">register / sign in </Link>
              )}
              {isLoggedIn && (
                <Link to="/cart">
                  <Badge badgeContent={cartItems} color="primary">
                    <ShoppingCartOutlinedIcon sx={{ ml: 2 }} />
                  </Badge>
                </Link>
              )}
            </span>
          </div>
          <div className={HeaderClass.mobileMenu}>
            <Collapse orientation="vertical" in={checked}>
              <ul className={HeaderClass.mobileMenuWrapper}>
                <li onClick={() => closeMenu('/products')}>our products</li>
                <li onClick={() => closeMenu('/news')}>news</li>
                <li onClick={() => closeMenu('/about-us')}>about us</li>
                <li onClick={() => closeMenu('/contact-us')}>contact us</li>
              </ul>
            </Collapse>
          </div>
        </div>
      </nav>
      <div className={HeaderClass.goldLine}></div>
    </>
  );
};

export default Header;
