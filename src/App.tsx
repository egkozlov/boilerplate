import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router';

export const App = () => <RouterProvider router={router} />;
