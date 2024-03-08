import classes from '../styles/components/AddressInformation.module.scss';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { openSnackbar } from '../app/features/snackbar/snackSlice';
import { deleteAddress } from '../api/auth';

export default function AddressInformation({ address, setActive, setEditedAddress }) {
  console.log(address);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data) => deleteAddress(data),
    onError: (error) => {
      console.log(error);
      dispatch(openSnackbar({ message: error?.response?.data?.message, type: 'error' }));
    },
    onSuccess: (response) => {
      console.log(response);
      queryClient.invalidateQueries({ queryKey: ['verify-user'] });
      dispatch(openSnackbar({ message: response?.data?.message, type: 'success' }));
    }
  });

  const editAddress = () => {
    setEditedAddress(address);
    setActive('add address');
  };

  const handleDelete = async () => {
    await mutateAsync(address);
  };

  return (
    <div className={classes.userInformationContainer}>
      <strong>{address.name}</strong>
      <div>
        <ContactMailOutlinedIcon />
        <span className={classes.addressText}>{address.address}</span>
      </div>
      <div>
        <LocationOnOutlinedIcon />
        <span className={classes.addressText}>{address.cityName}</span>
      </div>
      <div>
        <EmailOutlinedIcon />
        <span className={classes.addressText}>{address.countryName}</span>
      </div>
      <div>
        <PhoneOutlinedIcon />
        <span className={classes.addressText}>{address.phoneNumber}</span>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={() => editAddress()}
          variant="contained"
          startIcon={<BorderColorOutlinedIcon />}
        >
          edit
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => handleDelete()}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
