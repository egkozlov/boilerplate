// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

export const App = () => {
  const { t } = useTranslation();

  return <div className="App">{t('welcomeMessage')}</div>;
};
