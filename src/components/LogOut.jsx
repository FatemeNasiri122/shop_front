import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useMutation } from '@tanstack/react-query';
import { logoutUser } from '../app/features/user/userSlice';
import { useDispatch } from 'react-redux';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { memo } from 'react';
import { logout } from '../api/auth';
import { openSnackbar } from '../app/features/snackbar/snackSlice';
import { CircularProgress } from '@mui/material';

const LogOut = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { mutateAsync, isLoading } = useMutation({
    queryKey: ['logout-user'],
    mutationFn: async () => logout(),
    onSuccess: (response) => {
      debugger;
      dispatch(logoutUser());
      console.log(response);
    },
    onError: (error) => {
      debugger;
      console.log(error);
      dispatch(openSnackbar({ message: error?.response?.data?.message, type: 'error' }));
    }
  });

  const handleLogout = async () => {
    await mutateAsync();
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        color="error"
        startIcon={<LogoutOutlinedIcon />}
        onClick={() => handleOpen()}
      >
        Log out
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modalContainer" onClick={() => handleClose()}>
          {isLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              <p className="titleModal">Are you sure? </p>
              <div className="btnModal">
                <Button variant="contained" onClick={() => handleClose()}>
                  no
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ marginLeft: '16px' }}
                  onClick={() => handleLogout()}
                >
                  yes
                </Button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default memo(LogOut);
