import classes from '../styles/components/ContactUS.module.scss';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { openSnackbar } from '../app/features/snackbar/snackSlice';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { contactUs } from '../api/contactUs';
import { Breadcrumbs } from '@mui/material';

const ContactUs = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data) => contactUs(data),
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
      reset();
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
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" className="breadCrumLink">
          Home
        </Link>
        <span className="breadCrumText">Contact us</span>
      </Breadcrumbs>
      <div className={classes.writeUsContainer}>
        <div className={classes.writeUS}>
          <h2 className="title">WRITE US</h2>
          <p>
            Be the first to receive information about new arrivals, latest trends, events, brand
            news and more
          </p>
        </div>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <label htmlFor="first-name" className={classes.inputLabel}>
                Name
              </label>
              <TextField
                id="first-name"
                placeholder="Enter your name"
                fullWidth
                {...register('name', { required: 'this feild is required' })}
                error={errors?.name}
              />
              <p className={classes.error}>{errors?.name?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="email" className={classes.inputLabel}>
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
              />
              <p className={classes.error}>{errors?.email?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="phone-number" className={classes.inputLabel}>
                Phone Number
              </label>
              <TextField
                id="phone-number"
                placeholder="Enter your email"
                fullWidth
                {...register('phoneNumber', { required: 'this field is required' })}
                error={errors?.phoneNumber}
              />
              <p className={classes.error}>{errors?.phoneNumber?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label
                htmlFor="typeOfRequest"
                className={classes.inputLabel}
                style={{ display: 'block', marginBottom: '5px' }}
              >
                Type of request
              </label>
              <Select
                {...register('typeOfRequest', {
                  required: 'this field is required',
                  maxLength: { value: 15, message: 'the maximum last name can be 15 characters' }
                })}
                displayEmpty
                fullWidth
                inputProps={{ 'aria-label': 'Without label' }}
                error={errors?.typeOfRequest}
                defaultValue="select"
              >
                <MenuItem value="select">
                  <em style={{ color: '#BCBFC0' }}>select</em>
                </MenuItem>
                <MenuItem value={'one'}>one</MenuItem>
                <MenuItem value={'two'}>two</MenuItem>
                <MenuItem value={'three'}>three</MenuItem>
              </Select>
              <p className={classes.error}>{errors?.typeOfRequest?.message}</p>
            </Grid>
            <Grid item xs={12}>
              <label className={classes.inputLabel} htmlFor="description">
                Message
              </label>
              <TextField
                id="description"
                placeholder="Write here your message"
                multiline
                rows={3}
                fullWidth
                {...register('message', { required: 'this feild is required' })}
                error={errors?.message}
              />
              <p className={classes.error}>{errors?.message?.message}</p>
            </Grid>
            <Grid item xs={6} md={4} margin="auto">
              <button type="submit" className={classes.btn}>
                send
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
