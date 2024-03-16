import StarBorderIcon from '@mui/icons-material/StarBorder';
import { CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToFavorite } from '../../api/auth.js';
import { openSnackbar } from '../../app/features/snackbar/snackSlice.js';

const AddToFavorite = ({ product, isSuccess }) => {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [favorite, setFavorite] = useState({ text: 'add to favorite', icon: false });
  const queryClient = useQueryClient();
  useEffect(() => {
    if (isSuccess) {
      user?.favoriteProducts?.items?.map((p) => {
        if (p._id === product._id) {
          setFavorite(() => ({ text: 'remove from favorite', icon: true }));
        }
      });
    }
  }, [isSuccess]);
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data) => addToFavorite(data),
    onError: (error) => {
      dispatch(openSnackbar({ msg: 'something went wrong please try again', type: 'error' }));
    },
    onSuccess: (response) => {
      setFavorite((prev) => {
        if (prev.text === 'add to favorite') {
          return { text: 'remove from favorite', icon: false };
        } else {
          return { text: 'add to favorite', icon: true };
        }
      });
      queryClient.invalidateQueries({ queryKey: ['verify-user'] });
    }
  });

  const add = async (data) => {
    if (isLoggedIn) {
      await mutateAsync({ product: data });
    } else {
      localStorage.setItem('backUrl', pathname);
      nav('/signin-or-register');
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="center">
          <CircularProgress />
        </div>
      ) : (
        <Button
          onClick={() => add(product)}
          startIcon={favorite.icon ? <StarBorderIcon /> : <StarBorderIcon />}
          variant="contained"
        >
          {favorite.text}
        </Button>
      )}
    </>
  );
};

export default AddToFavorite;
