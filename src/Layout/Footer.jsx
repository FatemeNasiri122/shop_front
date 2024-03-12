import React from 'react';
import { Link } from 'react-router-dom';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FooterClass from '../styles/Layout/Footer.module.scss';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <div className={FooterClass.footer}>
      <div className={FooterClass.goldLine}></div>
      <div className={FooterClass.footerMain}>
        <div className={FooterClass.content}>
          <div className={FooterClass.socialMedia}>
            <Link
              to="https://t.me/FatemeNasiri78/"
              className={FooterClass.iconCircle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
            </Link>
            <Link
              to="https://github.com/FatemeNasiri122/"
              className={FooterClass.iconCircle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.linkedin.com/in/seyed-fateme-mirfallah-nasiri-05921424a/"
              className={FooterClass.iconCircle}
            >
              <span>in</span>
            </Link>
          </div>
          <div className={FooterClass.goldLine}></div>
          <div className={FooterClass.footerLinks}>
            <div className={FooterClass.col}>
              <h4>Our World</h4>
              <Link to="/about-us">About </Link>
              {!isLoggedIn && <Link to="/signin-or-register">signin or register</Link>}
              <Link to="/news">News</Link>
              {isLoggedIn && <Link to="/account-details">account details</Link>}
            </div>
            <div className={FooterClass.col}>
              <h4>Customer care</h4>
              <Link to="/contact-us">Contact us</Link>
              {isLoggedIn && <Link to="/cart">cart</Link>}
            </div>
          </div>
          <div className={FooterClass.goldLine}></div>
          <div className={FooterClass.developerInfo}>
            <p>
              made with ❤ by{' '}
              <Link
                to="https://github.com/FatemeNasiri122/"
                target="_blank"
                rel="noopener noreferrer"
              >
                fateme nasiri
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
