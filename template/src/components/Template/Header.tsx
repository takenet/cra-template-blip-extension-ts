import { useTranslation } from 'react-i18next';

import settings from 'config';

function Template() {
    const { t } = useTranslation();

    return (
        <header className="px-4 mx-auto sm:px-4 lg:mx-11">
            <div className="flex justify-between items-center pt-6 pb-4 border-b border-neutral-medium-wave md:justify-start md:space-x-3">
                <div className="flex justify-start items-center lg:flex-1 lg:w-0">
                    <h1 className="text-2xl font-semibold text-neutral-dark-city">
                        {t('title.homePage')}
                    </h1>
                    <div
                        className="pt-2 ml-2 text-neutral-medium-cloud cursor-help"
                        data-testid="page-header-tooltip"
                    >
                        <bds-tooltip
                            position="right-center"
                            tooltip-text="BLiP extension it's a technology-agnostic way to plug unofficial features to enhance the portal capabilities."
                        >
                            <bds-icon name="info" theme="solid">
                                Hover me
                            </bds-icon>
                        </bds-tooltip>
                    </div>
                </div>
                <div className="hidden justify-end items-center md:flex md:flex-1 lg:w-0">
                    <bds-button
                        variant="primary"
                        icon="link"
                        onClick={() =>
                            window.open(settings.repositoryUrl, '_blank')
                        }
                    >
                        {t('button.repository')}
                    </bds-button>
                </div>
            </div>
        </header>
    );
}

export default Template;
