import {
  Flex,
  Button,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  VStack,
  Heading,
  Link,
  Box,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';

export const LoginPage = () => {
  const { signin } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(values);
        signin('test');
        navigate(from, { replace: true });
      }, 3000);
    });
  }

  return (
    <Flex direction="column" m="0 auto" maxWidth="400px" px="4" py="20">
      <Heading mb="4">{t('login.title')}</Heading>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <VStack gap="2" align="center">
          <FormControl isInvalid={!!errors.username}>
            <FormLabel htmlFor="username">{t('login.form.username.label')}</FormLabel>
            <Input
              id="username"
              {...register('username', {
                required: t('login.form.username.errors.required'),
              })}
            />
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">{t('login.form.password.label')}</FormLabel>
            <Input
              id="password"
              type="password"
              {...register('password', {
                required: t('login.form.password.errors.required'),
              })}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <Button mt="4" isLoading={isSubmitting} colorScheme="blue" type="submit">
            {t('login.submitButton')}
          </Button>
          <Box>
            <Trans
              i18nKey="login.registerHelper"
              components={{
                RegisterLink: <Link as={RouterLink} color="blue" to="/register" />,
              }}
            />
          </Box>
        </VStack>
      </form>
    </Flex>
  );
};
