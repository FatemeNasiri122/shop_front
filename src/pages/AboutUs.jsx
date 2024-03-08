import classes from '../styles/components/aboutus.module.scss';
import React from 'react';
import { motion } from 'framer-motion';
import { Breadcrumbs } from '@mui/material';
import aboutus from '../assets/img/aboutus.png';
import { Link } from 'react-router-dom';

const contentVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const titleVariants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: 'Tween',
      bounce: 0.4,
      duration: 1
    }
  }
};

const AboutUS = () => {
  return (
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" className='breadCrumLink'>Home</Link>
        <span className='breadCrumText'>about </span>
      </Breadcrumbs>
      <div className={classes.AboutUSContainer}>
        <motion.div variants={titleVariants}>
          <h1 className={classes.title}>about us</h1>
        </motion.div>
        <motion.div variants={titleVariants} className={classes.aboutImageContainer}>
          <img src={aboutus} alt="about us" />
        </motion.div>
        <motion.div variants={contentVariants}>
          <p>
            Lorem Epsom or outline is called an experimental and meaningless text in the printing,
            page layout and graphic design industry. The graphic designer uses this text as an
            element of the composition to fill the page and provide the initial appearance and
            overall design of the order, to graphically indicate the type and size of the font and
            the appearance of the text. Usually, graphic designers use trial and meaningless texts
            for page layout, just to show their client or business owner how the designed or paged
            page looks after the text is placed in it, and how the fonts and sizes are considered.
            has been taken Since designers are generally not the authors of the text and do not have
            the duty to respect the copyright of the texts, and at the same time, their work is
            somehow dependent on the text, they use fake contents to arrange their graphic pages to
            complete the design and layout stage.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUS;
