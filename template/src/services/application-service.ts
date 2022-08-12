import { IframeMessageProxy } from 'iframe-message-proxy';
import IMP from 'constants/iframe-message-proxy';

const PORTAL_RECIPIENT = 'postmaster@portal.blip.ai';
const APPLICATIONS_PATH = `/applications`;

const getApplicationDataAsync = async (fullIdentity?: string) => {
    try {
        const { response: application } = await IframeMessageProxy.sendMessage({
            action: IMP.ACTIONS.GET_APPLICATION,
            content: fullIdentity || null
        });
        return application;
    } catch (err) {
        return false;
    }
};

const getBotDataAsync = async (identity: string) => {
    try {
        const { response } = await IframeMessageProxy.sendMessage({
            action: IMP.ACTIONS.SEND_COMMAND,
            content: {
                destination: IMP.DESTINATIONS.BLIP_SERVICE,
                command: {
                    method: IMP.COMMAND_METHODS.GET,
                    to: PORTAL_RECIPIENT,
                    uri: `${APPLICATIONS_PATH}/${identity}`
                }
            }
        });

        const data = { ...response, identity };

        return data;
    } catch (err) {
        return false;
    }
};

export { getApplicationDataAsync, getBotDataAsync };
