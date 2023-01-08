import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';
import { Home } from './Home';

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} errorElement={<ErrorPage />} />),
);
