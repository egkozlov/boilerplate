import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { Home } from '../Home';
import { LoginPage } from '../auth/pages/LoginPage';
import { RegisterPage } from '../auth/pages/RegisterPage';
import { RequireAuth } from './guards/RequireAuth';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
        errorElement={<ErrorPage />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </>,
  ),
);
