import { Heading, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Flex>
      <Heading>{t('welcomeMessage')}</Heading>
    </Flex>
  );
};
