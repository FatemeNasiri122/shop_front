import classes from '../../styles/components/FavoriteItem.module.scss';
import Grid from '@mui/material/Grid';
import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { addToFavorite } from '../../api/auth.js';
import LoadingState from '../helper/LoadingState.jsx';
import { openSnackbar } from '../../app/features/snackbar/snackSlice.js';

const FavoriteItem = ({ data }) => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data) => addToFavorite(data),
    onError: (error) => {
      dispatch(
        openSnackbar({
          message: error?.response?.data?.message || 'something went wrong please try again',
          type: 'error'
        })
      );
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['verify-user'] });
      dispatch(openSnackbar({ message: 'the product removed from favorite', type: 'success' }));
    }
  });

  const deleteFavorite = async (data) => {
    if (isLoggedIn) {
      await mutateAsync({ product: data });
    }
  };
  if (isLoading) {
    return (
      <Grid item xs={12} md={8} marginTop={'18px'}>
        <LoadingState />
      </Grid>
    );
  }
  return (
    <div className={classes.favoriteItem}>
      <Grid container>
        <Grid item xs={12} sm={2}>
          <div className={classes.imageContainer}>
            <img loading="lazy" src={data.image} alt="" />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          display={{ sm: 'flex', alignItems: 'center', xs: 'flex', justifyContent: 'center' }}
        >
          <div className={classes.text}>
            <strong>NAME:</strong> <span>{data.name}</span>
            <p>
              <strong>code: </strong> <span>{data.code}</span>
            </p>
            <p>
              <strong>color:</strong>{' '}
              {data.colors.map((color) => (
                <span key={color?.color}>{color?.color}</span>
              ))}
            </p>
            <p>
              <strong>size: </strong>
              {data.size.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </p>
          </div>
        </Grid>
        <Grid item xs={3} display={{ sm: 'none' }}></Grid>
        <Grid
          item
          xs={12}
          sm={2}
          display={{ sm: 'flex', alignItems: 'center', xs: 'flex', justifyContent: 'center' }}
          paddingTop={1}
        >
          <strong>${data.price}</strong>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          display={{ sm: 'flex', alignItems: 'center', xs: 'flex', justifyContent: 'center' }}
          paddingTop={1}
        >
          <button onClick={() => deleteFavorite(data)}>
            <DeleteOutlineOutlinedIcon />
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FavoriteItem;
