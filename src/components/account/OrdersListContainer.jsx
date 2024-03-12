import Grid from '@mui/material/Grid';
import Order from './Order.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import LoadingState from '../helper/LoadingState.jsx';
import EmptyState from '../helper/EmptyState.jsx';
import { getOrders } from '../../api/order.js';

const OrdersListContainer = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => getOrders()
  });

  if (isLoading) {
    return (
      <Grid item xs={12} md={8} marginTop={'18px'}>
        <LoadingState />
      </Grid>
    );
  }
  if (isError || data?.length === 0) {
    return (
      <Grid item xs={12} md={8} marginTop={'18px'}>
        <EmptyState data="order" />
      </Grid>
    );
  }
  return (
    <Grid item xs={12} md={8} marginTop={'18px'}>
      <AnimatePresence>
        <motion.div initial={{ y: -100 }} animate={{ y: 1 }} exit={{ opacity: 0 }}>
          {data?.map((order) => (
            <Order order={order} key={order._id} />
          ))}
        </motion.div>
      </AnimatePresence>
    </Grid>
  );
};

export default OrdersListContainer;
