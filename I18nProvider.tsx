import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from './translations/locales/en.json';
import esTranslation from './translations/locales/es.json';
import frTranslation from './translations/locales/fr.json';
import polTranslation from './translations/locales/pol.json';
import ireTranslation from './translations/locales/ire.json';
import cnTranslation from './translations/locales/cn.json';
import lhTranslation from './translations/locales/lh.json';

// Configure i18n and load translation files
i18n.init({
  resources: {
    en: { translation: { ...enTranslation } },
    es: { translation: { ...esTranslation } },
    ire: { translation: { ...ireTranslation } },
    cn: { translation: { ...cnTranslation } },
    pol: { translation: { ...polTranslation } },
    fr: { translation: { ...frTranslation } },
    lh: { translation: { ...lhTranslation } },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

interface I18nProviderProps {
  children: React.ReactNode;
}

// Wrap your app with the i18n provider
const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

export default I18nProvider;