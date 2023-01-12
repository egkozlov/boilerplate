import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';
import { Home } from './Home';
import { RegisterPage } from './RegisterPage';
import { RequireAuth } from './RequireAuth';

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
    </>,
  ),
);
