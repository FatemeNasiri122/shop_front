import classes from '../../styles/components/CartCheckout.module.scss';
import Grid from '@mui/material/Grid';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { openSnackbar } from '../../app/features/snackbar/snackSlice.js';
import { addOrder } from '../../api/order.js';
import Loading from '../helper/Loading.jsx';
import { useNavigate } from 'react-router-dom';

export default function CartCheckout({ selectedAddress }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const nav = useNavigate();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async () => addOrder(selectedAddress),
    onError: (error) => {
      dispatch(
        openSnackbar({
          message: error?.response?.data?.message || 'something went wrong please try again',
          type: 'error'
        })
      );
    },
    onSuccess: (response) => {
      dispatch(openSnackbar({ message: response?.data?.message, type: 'success' }));
      queryClient.invalidateQueries({ queryKey: ['verify-user'] });
      nav('/account-details');
    }
  });
  const handleOrder = async () => {
    await mutateAsync();
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className={classes.checkoutContainer}>
        <Grid container>
          <Grid item xs={12} sm={6} margin="auto">
            <div className={classes.finalContainer}>
              <p className={classes.title}>final invoice</p>
              <p>
                <strong>total purchase:</strong> $ {user.cart.totalPrice}
              </p>
              <p>
                <strong>total number of orders:</strong> {user.cart.totalOrders}
              </p>
              <p>
                <strong>shipping:</strong> 0
              </p>
              <p>
                <strong>order total :</strong>$ {user.cart.totalPrice}
              </p>
              <button onClick={() => handleOrder()} className={classes.btn}>
                order now
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
