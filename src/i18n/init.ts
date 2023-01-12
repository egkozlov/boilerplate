import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEN from './resourses/en/common.json';

const resources = {
  en: {
    common: commonEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  defaultNS: 'common',
  lng: 'en',
  fallbackLng: 'en',
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
});
