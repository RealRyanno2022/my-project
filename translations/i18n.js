import * as RNLocalize from "react-native-localize";
import i18n from 'i18n-js';

const en = require('./locales/en.json');
const es = require('./locales/es.json');

i18n.translations = {
  en,
  es
};

const fallback = { languageTag: "en", isRTL: false };

const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) || fallback;

i18n.locale = languageTag;

export default i18n;