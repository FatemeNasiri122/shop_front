import React from 'react';
import notFound from '../assets/img/not_found.svg';
import { useNavigate } from 'react-router-dom';
import LinkIcon from '@mui/icons-material/Link';
import { Button } from '@mui/material';

const NotFound = () => {
  const nav = useNavigate();

  return (
    <>
      <img style={{ width: '100%', height: '400px' }} src={notFound} alt="not found" />
      <p className="notFoundText">page not found</p>
      <div className="center">
        <Button
          variant="contained"
          endIcon={<LinkIcon />}
          sx={{ marginTop: '16px' }}
          onClick={() => nav('/')}
        >
          back to home
        </Button>
      </div>
    </>
  );
};

export default NotFound;
