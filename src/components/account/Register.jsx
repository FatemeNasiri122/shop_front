import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { openSnackbar } from '../../app/features/snackbar/snackSlice.js';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../app/features/user/userSlice.js';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useLocation } from 'react-router-dom';
import { registerUser } from '../../api/auth.js';
import { setCookie } from '../../utils/cookie.js';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data) => registerUser(data),
    onError: (error) => {
      dispatch(
        openSnackbar({
          message: error?.response?.data?.message || 'something went wrong please try again',
          type: 'error'
        })
      );
    },
    onSuccess: (response) => {
      dispatch(loginUser(response.data.user));
      const token = response.data.token;
      setCookie("token", token, 7);
      queryClient.invalidateQueries({ queryKey: ['verify-user'] });
      if (pathname.split('/')[1] === 'signin-or-register') {
        nav(-1);
      }
    }
  });
  const onSubmit = async (data) => {
    await mutateAsync(data);
  };

  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="moreWideContainer">
        <h1 className="title">register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} columnSpacing={2}>
            <Grid item xs={12} sm={6}>
              <label htmlFor="first-name" className="inputLabel">
                First Name
              </label>
              <TextField
                id="first-name"
                placeholder="Enter your first name"
                {...register('firstName', {
                  required: 'this field is required',
                  maxLength: { value: 15, message: 'the maximum first name can be 15 characters' }
                })}
                fullWidth
                error={errors?.firstName}
              />
              <p className="error">{errors?.firstName?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="last-name" className="inputLabel">
                Last Name
              </label>
              <TextField
                id="last-name"
                placeholder="Enter your last name"
                {...register('lastName', {
                  required: 'this field is required',
                  maxLength: { value: 15, message: 'the maximum last name can be 15 characters' }
                })}
                fullWidth
                error={errors?.lastName}
              />
              <p className="error">{errors?.lastName?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="email" className="inputLabel">
                Email
              </label>
              <TextField
                id="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'this field is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format'
                  }
                })}
                fullWidth
                error={errors?.email}
              />
              <p className="error">{errors?.email?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="confirm-email" className="inputLabel">
                Confirm Email
              </label>
              <TextField
                id="confirm-email"
                placeholder="Enter your email"
                {...register('confirmEmail', {
                  required: 'this field is required',
                  validate: (e) => {
                    if (watch('email') !== e) {
                      return 'email and confirm email does not match';
                    }
                  }
                })}
                fullWidth
                error={errors?.confirmEmail}
              />
              <p className="error">{errors?.confirmEmail?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="password" className="inputLabel">
                Password
              </label>
              <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: 'this field is required',
                  pattern: {
                    value: /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message: 'password is invalid'
                  }
                })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                error={errors?.password}
                placeholder="Enter your current password"
                fullWidth
              />
              <p className="error">{errors?.password?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="newPassword" className="inputLabel">
                Confirm Password
              </label>
              <OutlinedInput
                id="newPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword', {
                  required: 'this field is required',
                  validate: (e) => {
                    if (watch('password') !== e) {
                      return 'password and confirm password does not match';
                    }
                  }
                })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      edge="end">
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                error={errors?.confirmPassword}
                placeholder="Enter your current password"
                fullWidth
              />
              <p className="error">{errors?.confirmPassword?.message}</p>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label={'I would like to receive a newsletter'}
                {...register('newsLetter')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} margin="auto">
              <button type="submit" className="btn">
                register
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default Register;
