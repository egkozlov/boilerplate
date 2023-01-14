import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';
import { Home } from './Home';
import { LoginPage } from './auth/LoginPage';
import { RegisterPage } from './auth/RegisterPage';
import { RequireAuth } from './auth/RequireAuth';

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
