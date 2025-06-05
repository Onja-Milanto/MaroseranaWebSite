import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/en';
import frTranslation from './translations/fr';
import mgTranslation from './translations/mg';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      fr: {
        translation: frTranslation
      },
      mg: {
        translation: mgTranslation
      }
    },
    lng: 'fr', // Default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;