import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/locales/en.json';
import esTranslation from './translations/locales/es.json';
import frTranslation from './translations/locales/fr.json';
import lhTranslation from './translations/locales/lh.json';
import ireTranslation from './translations/locales/ire.json';
import polTranslation from './translations/locales/pol.json';
import cnTranslation from './translations/locales/cn.json';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import I18nProvider from './I18nProvider';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: { ...enTranslation } },
      es: { translation: { ...esTranslation } },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.render(
  <I18nProvider>
    <App />
  </I18nProvider>,
  document.getElementById('root')
);