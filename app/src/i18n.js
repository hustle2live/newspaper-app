import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './features/translations/translationEN.json';
import translationUA from './features/translations/translationUA.json';

i18n.use(initReactI18next).init({
  // we init with resources
  resources: {
    en: {
      translations: translationEN
    },
    ua: {
      translations: translationUA
    }
  },
  fallbackLng: 'ua',
  debug: true, // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false, // we use content as keys
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
