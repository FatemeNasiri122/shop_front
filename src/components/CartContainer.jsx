import classes from '../styles/components/CartContainer.module.scss';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import UndoIcon from '@mui/icons-material/Undo';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const CartContainer = () => {
  return (
    <>
      <div className={classes.cartContainer}>
        <div className={classes.cart}>
          <LocalShippingIcon sx={{ width: '45px', height: '45px' }} />
          <span>free shipping</span>
        </div>
        <div className={classes.cart}>
          <UndoIcon sx={{ width: '45px', height: '45px' }} />
          <span>easy returns</span>
        </div>
        <div className={classes.cart}>
          <DeliveryDiningIcon sx={{ width: '45px', height: '45px' }} />
          <span>delivered to you</span>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
