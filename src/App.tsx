import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { AuthProvider } from './auth/hooks/useAuth';

export const App = () => (
  <AuthProvider>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </AuthProvider>
);
