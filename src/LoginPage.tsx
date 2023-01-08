import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';

export const LoginPage = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const onLoginClick = () => {
    signin('test');
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={onLoginClick}>Signin</button>
    </div>
  );
};
