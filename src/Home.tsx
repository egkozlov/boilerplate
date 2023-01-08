import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  return <div className="App">{t('welcomeMessage')}</div>;
};
