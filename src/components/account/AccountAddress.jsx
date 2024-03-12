import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddressInformation from './AddressInformation.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import AddAddressForm from './AddAddressForm.jsx';
import { useSelector } from 'react-redux';
import EmptyState from '../helper/EmptyState.jsx';

const AccountAddress = () => {
  const { user } = useSelector((state) => state.user);
  const [active, setActive] = useState('address');
  const [editedAddress, setEditedAddress] = useState({});

  return (
    <>
      {active === 'address' && (
        <Grid item xs={12} md={8}>
          <AnimatePresence>
            <motion.div initial={{ y: -100 }} animate={{ y: 1 }} exit={{ opacity: 0 }}>
              <Button
                sx={{ margin: '16px 0' }}
                onClick={() => setActive('add address')}
                variant="contained"
                startIcon={<AddIcon />}
              >
                add address
              </Button>
              <Grid container spacing={2}>
                {user?.address?.items?.length === 0 ? (
                  <EmptyState data="address" />
                ) : (
                  user?.address?.items?.map((address) => (
                    <Grid item xs={12} sm={6} key={address._id}>
                      <AddressInformation
                        key={address._id}
                        setActive={setActive}
                        address={address}
                        setEditedAddress={setEditedAddress}
                      />
                    </Grid>
                  ))
                )}
              </Grid>
            </motion.div>
          </AnimatePresence>
        </Grid>
      )}
      {active === 'add address' && (
        <AddAddressForm
          setActive={setActive}
          editedAddress={editedAddress}
          setEditedAddress={setEditedAddress}
        />
      )}
    </>
  );
};

export default AccountAddress;
