import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { openSnackbar } from '../../app/features/snackbar/snackSlice.js';
import { useQueryClient } from '@tanstack/react-query';
import { addAddress } from '../../api/auth.js';
import Loading from '../helper/Loading.jsx';

const AddAddressForm = ({ setActive, editedAddress, setEditedAddress }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data) => addAddress(data),
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
      dispatch(openSnackbar({ message: response?.data?.message, type: 'success' }));
      setEditedAddress({});
      setActive('address');
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    await mutateAsync(data);
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <Grid item xs={12} md={8}>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} columnSpacing={2}>
            <Grid item xs={12} sm={6}>
              <label htmlFor="name" className="inputLabel">
                name
              </label>
              <TextField
                id="name"
                placeholder="Enter your first name"
                {...register('name', {
                  required: 'this field is required',
                  maxLength: { value: 15, message: 'the maximum first name can be 15 characters' }
                })}
                fullWidth
                defaultValue={editedAddress?.name}
                error={errors?.name}
              />
              <p className="error">{errors?.name?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="city-name" className="inputLabel">
                city name
              </label>
              <TextField
                id="city-name"
                placeholder="Enter your city name"
                {...register('cityName', {
                  required: 'this field is required'
                })}
                fullWidth
                defaultValue={editedAddress?.cityName}
                error={errors?.cityName}
              />
              <p className="error">{errors?.cityName?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="country-name" className="inputLabel">
                country name
              </label>
              <TextField
                id="country-name"
                placeholder="Enter your country name"
                {...register('countryName', {
                  required: 'this field is required'
                })}
                fullWidth
                defaultValue={editedAddress?.countryName}
                error={errors?.countryName}
              />
              <p className="error">{errors?.countryName?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="phone-number" className="inputLabel">
                phone number
              </label>
              <TextField
                id="phone-number"
                placeholder="Enter your phone number"
                {...register('phoneNumber', {
                  required: 'this field is required',
                  pattern: {
                    value: /^\d+$/,
                    message: 'phone number must contain numbers'
                  }
                })}
                fullWidth
                defaultValue={editedAddress?.phoneNumber}
                error={errors?.phoneNumber}
              />
              <p className="error">{errors?.phoneNumber?.message}</p>
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="address" className="inputLabel">
                address
              </label>
              <TextField
                id="address"
                placeholder="Enter your last name"
                {...register('address', {
                  required: 'this field is required'
                })}
                fullWidth
                defaultValue={editedAddress?.address}
                error={errors?.address}
              />
              <p className="error">{errors?.address?.message}</p>
            </Grid>
            <input type="hidden" {...register('_id')} value={editedAddress._id} />
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="contained"
                color="error"
                startIcon={<LogoutOutlinedIcon />}
                onClick={() => setActive('address')}
              >
                cancel
              </Button>
              <Button
                variant="contained"
                type="submit"
                sx={{ marginLeft: '12px' }}
                startIcon={<BookmarkBorderOutlinedIcon />}
              >
                save data
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default AddAddressForm;
