import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { openSnackbar } from '../../app/features/snackbar/snackSlice.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { addToCart } from '../../api/auth.js';

const AddToCart = ({ product, color, size, setErrorMsg, isAlreadyAdded, setIsAlreadyAdded }) => {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');
  const queryClient = useQueryClient();
  const { pathname } = useLocation();
  const nav = useNavigate();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async () => addToCart(url, product, color, size),
    onError: (error) => {
      dispatch(
        openSnackbar({
          message: error?.response?.data?.message || 'something went wrong please try again',
          type: 'error'
        })
      );
    },
    onSuccess: async (response) => {
      await Promise.all([
        queryClient.invalidateQueries(['verify-user']),
        queryClient.invalidateQueries(['product'])
      ]);
    }
  });

  const cart = async (url) => {
    setUrl(url);
    const type = pathname.split('/')[1];
    if (url === 'remove-from-cart') {
      await mutateAsync();
      setIsAlreadyAdded(false);
      return;
    }

    if (type === 'product') {
      if (color !== '' && size !== '' && isLoggedIn) {
        setErrorMsg('');
        await mutateAsync();
        setIsAlreadyAdded(true);
      } else {
        setErrorMsg('please select color and size');
      }
    } else {
      await mutateAsync();
      setIsAlreadyAdded(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <button
        onClick={() => {
          localStorage.setItem('backUrl', pathname);
          nav('/signin-or-register');
        }}
        className="btn"
      >
        add to Cart
      </button>
    );
  }
  if (pathname !== '/cart' && !isAlreadyAdded) {
    return isLoading ? (
      <div className="center">
        <CircularProgress sx={{ width: '8px', height: '8px', marginTop: '16px' }} />
      </div>
    ) : (
      <button
        onClick={() => {
          product.numberOfProduct > 0 && cart('add-to-cart');
        }}
        className="btn"
      >
        add to Cart
      </button>
    );
  }
  return (
    <div>
      {user?.cart?.items?.map(
        (item) =>
          item.product._id === product?._id && (
            <>
              <div className="counter">
                <button
                  onClick={() => {
                    cart('remove-from-cart');
                  }}
                >
                  <DeleteOutlinedIcon />
                </button>
                <button
                  onClick={() => {
                    item.count > 1 && cart('reduce-from-cart');
                  }}
                >
                  <RemoveIcon />
                </button>
                {isLoading ? (
                  <span className="number">
                    {' '}
                    <CircularProgress size="16px" />{' '}
                  </span>
                ) : (
                  <span className="number">{item.count}</span>
                )}
                <button
                  onClick={() => {
                    product.numberOfProduct > 0 && cart('add-to-cart');
                  }}
                >
                  <AddIcon />
                </button>
              </div>
            </>
          )
      )}
    </div>
  );
};

export default AddToCart;
