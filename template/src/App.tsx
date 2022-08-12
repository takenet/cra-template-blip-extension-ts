import { StrictMode, Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import settings from 'config';

import ToastTypes from 'constants/toast-types';
import { showToast, withLoadingAsync } from 'services/common-service';
import { getCurrentLanguageAsync } from 'services/user-service';

import Routes from 'routes';

function App() {
    const { t, i18n } = useTranslation('notification');

    useEffect(() => {
        withLoadingAsync(async () => {
            await getPortalLanguage();

            showToast({
                type: ToastTypes.SUCCESS,
                message: t('success.loaded')
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getPortalLanguage = async () => {
        const language = await getCurrentLanguageAsync();

        if (!!language && language !== settings?.language?.default) {
            i18n.changeLanguage(language);
        }
    };

    return (
        <StrictMode>
            <Suspense fallback="...is loading">
                <Routes />
            </Suspense>
        </StrictMode>
    );
}

export default App;
