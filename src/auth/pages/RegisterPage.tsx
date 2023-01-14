import {
  Flex,
  Button,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  VStack,
  Heading,
  Box,
  Link,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { isEmailInvalid } from '../utils';

type RegistrationForm = {
  username: string;
  email: string;
  password: string;
};

export const RegisterPage = () => {
  const { signin } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';




  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationForm>();

  function onSubmit(values: RegistrationForm) {
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
      <Heading mb="4">{t('registration.title')}</Heading>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <VStack gap="2" align="center">
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">{t('registration.form.email.label')}</FormLabel>
            <Input
              id="email"
              type="email"
              {...register('email', {
                required: t('registration.form.email.errors.required'),
                validate: (value) => isEmailInvalid(value) || t('registration.form.email.errors.invalid'),
              })}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.username}>
            <FormLabel htmlFor="username">{t('registration.form.username.label')}</FormLabel>
            <Input
              id="username"
              {...register('username', {
                required: t('registration.form.username.errors.required'),
                minLength: { value: 4, message: t('registration.form.username.errors.minLength') },
              })}
            />
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">{t('registration.form.password.label')}</FormLabel>
            <Input
              id="password"
              type="password"
              {...register('password', {
                required: t('registration.form.password.errors.required'),
              })}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <Button mt="4" isLoading={isSubmitting} colorScheme="blue" type="submit">
            {t('registration.submitButton')}
          </Button>
          <Box>
            <Trans
              i18nKey="registration.loginHelper"
              components={{
                LoginLink: <Link as={RouterLink} state={{ from }} color="blue" to="/login" />,
              }}
            />
          </Box>
        </VStack>
      </form>
    </Flex>
  );
};
