import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import settings from 'config';

const defaultNS = 'common';

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        lng: settings?.language?.default,
        fallbackLng: 'en',
        ns: ['common', 'notification'],
        debug: settings?.language?.debug,
        defaultNS
    });

export { defaultNS };
export default i18n;
