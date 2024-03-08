import { useLocation } from 'react-router-dom';
import Class from '../styles/components/EmptyState.module.scss';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingState = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className={Class.errorContainer}>
      <CircularProgress />
    </div>
  );
};

export default LoadingState;
