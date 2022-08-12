// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import common from '../../public/locales/pt/common.json';
import notification from '../../public/locales/pt/notification.json';

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
    // and extend them!
    interface CustomTypeOptions {
        defaultNS: 'common';
        resources: {
            common: typeof common;
            notification: typeof notification;
        };
    }
}
