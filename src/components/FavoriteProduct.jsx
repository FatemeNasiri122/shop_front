import Grid from '@mui/material/Grid';
import FavoriteItem from './FavoriteItem';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import EmptyState from './EmptyState';

const FavoriteProduct = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Grid item xs={12} md={8}>
      <AnimatePresence>
        <motion.div initial={{ y: -100 }} animate={{ y: 1 }} exit={{ opacity: 0 }}>
          {user?.favoriteProducts?.items?.length === 0 ? (
            <EmptyState data="product" />
          ) : (
            user?.favoriteProducts?.items?.map((favorite) => (
              <FavoriteItem data={favorite} key={favorite._id} />
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </Grid>
  );
};

export default FavoriteProduct;
