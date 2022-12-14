import { useTranslation, Trans } from 'react-i18next';

import Logo from 'components/Logo';

function Home() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col justify-center items-center py-24 h-full text-neutral-dark-city">
            <Logo size="small" />
            <div className="mt-4">
                <p className="text-center">
                    {t('paragraph.homeDescription.part1')}
                </p>
                <p className="text-center">
                    <Trans i18nKey="paragraph.homeDescription.part2">
                        Edit <code>src/pages/Home.js</code> and save to reload.
                    </Trans>
                </p>
            </div>
        </div>
    );
}

export default Home;
