import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { openSnackbar } from '../../app/features/snackbar/snackSlice.js';
import { logoutUser } from '../../app/features/user/userSlice.js';
import { Button } from '@mui/material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { editPassword } from '../../api/auth.js';
import Loading from '../helper/Loading.jsx';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data) => editPassword(data),
    onError: (error) => {
      dispatch(
        openSnackbar({
          message: error?.response?.data?.message || 'something went wrong please try again',
          type: 'error'
        })
      );
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['logout-user'] });
      dispatch(logoutUser());
    }
  });

  const onSubmit = async (data) => {
    await mutateAsync(data);
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <Grid item xs={12} md={4} marginTop="16px">
        <AnimatePresence>
          <motion.div initial={{ y: -100 }} animate={{ y: 1 }} exit={{ opacity: 0 }}>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <Grid item xs={12} marginTop={{ xs: '0', md: '' }}>
                <label htmlFor="password" className="inputLabel">
                  Current Password
                </label>
                <OutlinedInput
                  marginTop={{ xs: '10px', md: '4px' }}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  error={errors?.password}
                  placeholder="Enter your current password"
                  fullWidth
                  {...register('password', {
                    required: 'this field is required',
                    pattern: {
                      value:
                        /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                      message: 'password is invalid'
                    }
                  })}
                />
              </Grid>
              <p className="error">{errors?.password?.message}</p>
              <Grid item xs={12} marginTop={{ xs: '0', md: '' }}>
                <label htmlFor="password" className="inputLabel">
                  New Password
                </label>
                <OutlinedInput
                  marginTop={{ xs: '10px', md: '4px' }}
                  type={showConfirmPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  error={errors?.newPassword}
                  placeholder="Enter your new password"
                  fullWidth
                  {...register('newPassword', {
                    required: 'this field is required',
                    pattern: {
                      value:
                        /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                      message: 'password is invalid'
                    },
                    validate: () => {
                      if (watch('newPassword') === watch('password')) {
                        return 'fuck';
                      }
                    }
                  })}
                />
              </Grid>
              <p className="error">{errors?.newPassword?.message}</p>
              <Grid item xs={12} marginTop={{ xs: '0', md: '' }}>
                <label htmlFor="password" className="inputLabel">
                  Confirm New Password
                </label>
                <OutlinedInput
                  marginTop={{ xs: '10px', md: '4px' }}
                  type={showNewPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowNewPassword((prev) => !prev)}
                        edge="end"
                      >
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  error={errors?.confirmPassword}
                  placeholder="Enter your confirm password"
                  fullWidth
                  {...register('confirmPassword', {
                    required: 'this field is required',
                    pattern: {
                      value:
                        /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                      message: 'password is invalid'
                    },
                    validate: (e) => {
                      if (watch('newPassword') !== e) {
                        return 'password and confirm password does not match';
                      }
                      if (watch('confirmPassword') === watch('password')) {
                        return 'fuck';
                      }
                    }
                  })}
                />
              </Grid>
              <p className="error">{errors?.confirmPassword?.message}</p>
              <p>
                By changing your password, you will be logged out of your current account and must
                log in again
              </p>
              <Grid item xs={12} margin="16px 0" display="flex" justifyContent="center">
                <Button
                  sx={{ width: '100%' }}
                  startIcon={<BookmarkBorderOutlinedIcon />}
                  variant="contained"
                  type="submit"
                >
                  save
                </Button>
              </Grid>
            </form>
          </motion.div>
        </AnimatePresence>
      </Grid>
    </>
  );
};

export default ChangePassword;
