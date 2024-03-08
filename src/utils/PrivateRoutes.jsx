import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  if (!isLoggedIn) {
    return <Navigate to="/signin-or-register" replace />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
