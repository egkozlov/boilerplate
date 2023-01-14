import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { AuthProvider } from './auth/useAuth';

export const App = () => (
  <AuthProvider>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </AuthProvider>
);
