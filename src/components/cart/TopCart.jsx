import classes from '../../styles/components/TopCart.module.scss';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import Grid from '@mui/material/Grid';

const TopCart = ({ isFirstActive, isSecondActive, isThirdActive }) => {
  return (
    <>
      <h1 className={classes.title}>cart</h1>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.rentalContainer}>
            <ul className={classes.rentalManagerProgressBarContainer}>
              <li className={isFirstActive && classes.activeLi}>
                <div className={classes.line}></div>
                <div className={classes.circle}>
                  <ShoppingBagOutlinedIcon />
                  <span>shopping cart</span>
                </div>
              </li>
              <li className={isSecondActive && classes.activeLi}>
                <div className={classes.line}></div>
                <div className={classes.circle}>
                  <ContactMailOutlinedIcon sx={{ color: isSecondActive ? '#000' : '#BFBFBF' }} />
                  <span>account</span>
                </div>
              </li>
              <li className={isThirdActive && classes.activeLi}>
                <div className={classes.line}></div>
                <div className={classes.circle}>
                  <CreditScoreOutlinedIcon sx={{ color: isThirdActive ? '#000' : '#BFBFBF' }} />
                  <span>checkout</span>
                </div>
                <div className={classes.line}></div>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default TopCart;
