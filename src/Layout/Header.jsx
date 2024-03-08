import React, { useEffect, useState } from 'react';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import Collapse from '@mui/material/Collapse';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderClass from '../styles/Layout/Header.module.scss';

const Header = () => {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const nav = useNavigate();
  const [checked, setChecked] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => { 
    if (user.cart) {
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
            <Link to="/contact-us">
              <PhoneForwardedOutlinedIcon />
            </Link>
            <Link to="/news">
              <NewspaperOutlinedIcon />
            </Link>
          </div>
          <div className={HeaderClass.nav}>
            <ul className={HeaderClass.menuItems}>
              <li className={HeaderClass.navItem}>
                <Link to="/products/men">men</Link>
              </li>
              <li className={HeaderClass.navItem}>
                <Link to="/products/women">woman</Link>
              </li>
              <li className={HeaderClass.navItem}>
                <Link to="/products/sneakers">sneakers</Link>
              </li>
              <li className={HeaderClass.navItem}>
                <Link to="/products/bags">bags</Link>
              </li>
            </ul>
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
              onClick={() => setChecked((prev) => !prev)}
            >
              <LunchDiningIcon />
            </button>
            <span>
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
                    <ShoppingCartOutlinedIcon sx={{ml: 2}} />
                  </Badge>
                </Link>
              )}
            </span>
          </div>
          <div className={HeaderClass.mobileMenu}>
            <Collapse orientation="vertical" in={checked}>
              <ul className={HeaderClass.mobileMenuWrapper}>
                <li onClick={() => closeMenu('/products/men')}>men</li>
                <li onClick={() => closeMenu('/products/women')}>women</li>
                <li onClick={() => closeMenu('/products/sneakers')}>sneakers</li>
                <li onClick={() => closeMenu('/products/bags')}>bags</li>
                {isLoggedIn && <li onClick={() => closeMenu('/account-details')}>account</li>}
                {isLoggedIn && <li onClick={() => closeMenu('/cart')}>shopping cart</li>}
                {!isLoggedIn && (
                  <li onClick={() => closeMenu('/signin-or-register')}>signin or register</li>
                )}
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
