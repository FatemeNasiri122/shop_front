import classes from '../../styles/components/SigninOrRegister.module.scss';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { openSnackbar } from '../../app/features/snackbar/snackSlice.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../../app/features/user/userSlice.js';
import { useQueryClient } from '@tanstack/react-query';
import { signin } from '../../api/auth.js';
import Loading from '../helper/Loading.jsx';

const Signin = ({ setSteps }) => {
  const queryClient = useQueryClient();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { pathname } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data) => signin(data),
    onError: (error) => {
      dispatch(
        openSnackbar({
          message: error?.response?.data?.message || 'something went wrong please try again',
          type: 'error'
        })
      );
    },
    onSuccess: (response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(loginUser(response.data.user));
      queryClient.invalidateQueries({ queryKey: ['verify-user'] });
      nav(-1);
    }
  });
  const onSubmit = async (data) => {
    await mutateAsync(data);
  };

  return (
    <Grid container spacing={2}>
      <Loading isLoading={isLoading} />
      <Grid item lg={6} xs={12} order={{ lg: 1, xs: 2 }}>
        <div className={classes.registerContainer}>
          <h2 className={classes.title}>register</h2>
          <p>create account for yourself</p>
          <ul>
            <li>Receive our exclusive newsletter</li>
            <li>Save your favourite products</li>
            <li>Shop faster and check your orders and returns</li>
          </ul>
          <button onClick={() => setSteps(1)} className={classes.btn}>
            register
          </button>
        </div>
      </Grid>
      <Grid item lg={6} xs={12} order={{ lg: 2, xs: 1 }}>
        <div className={classes.signinContainer}>
          <h2 className={classes.title}>sign in</h2>
          <p className={classes.explainText}>If you have already registered, sign in now</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <TextField
                {...register('email', { required: 'This field is required' })}
                id="email"
                label="email"
                variant="outlined"
                type="email"
                error={errors?.email}
              />
              <p className={classes.error}>{errors?.email?.message}</p>
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showCurrentPassword ? 'text' : 'password'}
                label="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowCurrentPassword((prev) => !prev)}
                      edge="end">
                      {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...register('password', { required: 'This field is required' })}
                error={errors?.password}
              />
              <p className={classes.error}>{errors?.password?.message}</p>
            </FormControl>
            <button type="submit" className={classes.btn} onClick={handleSubmit(onSubmit)}>
              sign in
            </button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signin;
