import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../auth/hooks/useAuth';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    const from = location.pathname;

    return <Navigate to="/login" state={{ from }} replace />;
  }

  return children;
};
