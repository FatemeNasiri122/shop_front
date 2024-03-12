import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { openSnackbar } from '../../app/features/snackbar/snackSlice.js';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import EmptyState from '../helper/EmptyState.jsx';
import LogOut from './LogOut.jsx';
import { editUser } from '../../api/auth.js';
import Loading from '../helper/Loading.jsx';

const AccountDetails = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    await mutateAsync(data);
  };
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data) => editUser(data),
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
    }
  });

  return (
    <>
      <Loading isLoading={isLoading} />
      {user ? (
        <Grid item xs={12} md={8} marginTop={'8px'}>
          <AnimatePresence>
            <motion.div initial={{ y: -100 }} animate={{ y: 1 }} exit={{ opacity: 0 }}>
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Grid container columnSpacing={2}>
                  <Grid item xs={12} sm={6}>
                    <label htmlFor="first-name" className="inputLabel">
                      First Name
                    </label>
                    <TextField
                      id="first-name"
                      placeholder="Enter your first name"
                      fullWidth
                      {...register('firstName', {
                        required: 'this field is required',
                        maxLength: {
                          value: 15,
                          message: 'the maximum first name can be 15 characters'
                        }
                      })}
                      error={errors?.firstName}
                      defaultValue={user.firstName}
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
                      fullWidth
                      {...register('lastName', {
                        required: 'this field is required',
                        maxLength: {
                          value: 15,
                          message: 'the maximum last name can be 15 characters'
                        }
                      })}
                      error={errors?.lastName}
                      defaultValue={user.lastName}
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
                      fullWidth
                      {...register('email', {
                        required: 'this field is required',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Entered value does not match email format'
                        }
                      })}
                      error={errors?.email}
                      defaultValue={user.email}
                    />
                    <p className="error">{errors?.email?.message}</p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label htmlFor="phone-number" className="inputLabel">
                      Phone Number
                    </label>
                    <TextField
                      id="phone-number"
                      placeholder="Enter your phone number"
                      fullWidth
                      {...register('phoneNumber', {
                        required: 'this field is required',
                        maxLength: {
                          value: 15,
                          message: 'the maximum last name can be 15 characters'
                        },
                        pattern: {
                          value: /^\d+$/,
                          message: 'phone number must contain numbers'
                        }
                      })}
                      error={errors?.phoneNumber}
                      defaultValue={user.phoneNumber}
                    />
                    <p className="error">{errors?.phoneNumber?.message}</p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label htmlFor="country" className="inputLabel">
                      Country
                    </label>
                    <Select
                      labelId="country"
                      id="country"
                      {...register('country', {
                        required: 'this field is required',
                        maxLength: {
                          value: 15,
                          message: 'the maximum last name can be 15 characters'
                        }
                      })}
                      displayEmpty
                      fullWidth
                      inputProps={{ 'aria-label': 'Without label' }}
                      error={errors?.country}
                      defaultValue={user?.country}
                    >
                      <MenuItem value={user.country}>
                        <em>{user.country ? user.country : 'select'}</em>
                      </MenuItem>
                      <MenuItem value={'iran'}>iran</MenuItem>
                      <MenuItem value={'usa'}>usa</MenuItem>
                      <MenuItem value={'canada'}>canada</MenuItem>
                    </Select>
                    <p className="error">{errors?.country?.message}</p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label htmlFor="city" className="inputLabel">
                      City
                    </label>
                    <Select
                      {...register('city', {
                        required: 'this field is required',
                        maxLength: {
                          value: 15,
                          message: 'the maximum last name can be 15 characters'
                        }
                      })}
                      displayEmpty
                      fullWidth
                      inputProps={{ 'aria-label': 'Without label' }}
                      error={errors?.city}
                      defaultValue={user.city}
                    >
                      <MenuItem value={user.city}>
                        <em>{user.city ? user.city : 'select'}</em>
                      </MenuItem>
                      <MenuItem value={'theran'}>tehran</MenuItem>
                      <MenuItem value={'new york'}>new york</MenuItem>
                      <MenuItem value={'torento'}>torento</MenuItem>
                    </Select>
                    <p className="error">{errors?.city?.message}</p>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={'I would like to receive a newsletter'}
                      {...register('newsletter')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div className="btnContainer">
                      <LogOut />
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{ marginLeft: '12px' }}
                        startIcon={<BookmarkBorderOutlinedIcon />}
                      >
                        save data
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </motion.div>
          </AnimatePresence>
        </Grid>
      ) : (
        <EmptyState data="user" />
      )}
    </>
  );
};

export default AccountDetails;
