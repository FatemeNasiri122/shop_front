import classes from '../../styles/components/Order.module.scss';
import Grid from '@mui/material/Grid';

const Order = ({ order }) => {
  return (
    <Grid item xs={12}>
      <div className={classes.order}>
        <div className={classes.orderTextContainer}>
          <span>
            <strong>order code:</strong> {order.orderCode}
          </span>
          <span>
            <strong>order date:</strong> {order.createdAt.split('T')[0]}
          </span>
          <span>
            <strong>total price:</strong> ${order.cart.totalPrice}
          </span>
          <span>
            <strong>total orders:</strong> {order.cart.totalOrders}
          </span>
        </div>
        <div className={classes.imgsContainer}>
          {order?.cart?.items?.map((item) => {
            return (
              <div className={classes.imgContainer} key={item._id}>
                <img loading="lazy" src={item.product.image} alt="product" />
              </div>
            );
          })}
        </div>
      </div>
    </Grid>
  );
};

export default Order;
