import { Flex, Button, Card, CardBody, Heading } from '@chakra-ui/react';
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
    <Flex m="0 auto" width="500px" mt="40">
      <Card width="full">
        <CardBody>
          <Heading>Login</Heading>
          <Button onClick={onLoginClick}>Signin</Button>
        </CardBody>
      </Card>
    </Flex>
  );
};
