import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../app/features/user/userSlice';
import { closeSnackbar } from '../app/features/snackbar/snackSlice';
import LoadingState from '../components/LoadingState';
import { verfiyToken } from '../api/auth';
import ScrollToTop from '../components/ScrollToTop';
import PreLoading from '../components/PreLoading';

const Layout = () => {
  const { showSnackbar, message, type } = useSelector((state) => state.snack);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { isLoading } = useQuery({
    queryKey: ['verify-user'],
    refetchOnWindowFocus: false,
    queryFn: async () => verfiyToken(),
    onSuccess: (response) => {
      // debugger
      console.log(response);
      dispatch(loginUser(response.user));
    },
    onError: (error) => {
      console.log(error);
      if (error.response.data.message === "jwt expired") {
        nav("/signin-or-register")
      }
    }
  });

  if (isLoading) {
    return <PreLoading />;
  }
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => dispatch(closeSnackbar())}
      >
        <Alert
          onClose={() => dispatch(closeSnackbar())}
          severity={type}
          sx={{ width: '100%' }}
          variant="filled"
        >
          {message}
        </Alert>
      </Snackbar>
      <Header />
      <div className="container">
        <React.Suspense fallback={<LoadingState />}>
          <Outlet />
        </React.Suspense>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;
