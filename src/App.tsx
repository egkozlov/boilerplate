import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router';
import { AuthProvider } from './useAuth';

export const App = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
