import { IframeMessageProxy } from 'iframe-message-proxy';
import IMP from 'constants/iframe-message-proxy';

import settings from 'config';

const PERMISSION_TYPE = 'write';
const PERMISSION_AREA = 'team';
const ACCOUNT_URI = '/account';

const getLoggedUserAsync = async () => {
    try {
        const { response } = await IframeMessageProxy.sendMessage({
            action: IMP.ACTIONS.SEND_COMMAND,
            content: {
                command: {
                    method: IMP.COMMAND_METHODS.GET,
                    uri: ACCOUNT_URI
                },
                destination: IMP.DESTINATIONS.BLIP_SERVICE
            }
        });

        return response;
    } catch (err) {
        return false;
    }
};

const userHasPermissionAsync = async (
    permission = PERMISSION_TYPE,
    area = PERMISSION_AREA
) => {
    try {
        const { response } = await IframeMessageProxy.sendMessage({
            action: IMP.ACTIONS.HAS_PERMISSIONS,
            content: {
                permissionType: permission,
                customArea: area
            }
        });

        return response;
    } catch (err) {
        return false;
    }
};

const getCurrentLanguageAsync = async () => {
    try {
        const { response } = await IframeMessageProxy.sendMessage({
            action: IMP.ACTIONS.GET_CURRENT_LANGUAGE
        });

        return response;
    } catch (err) {
        return settings?.language?.default;
    }
};

export { getLoggedUserAsync, userHasPermissionAsync, getCurrentLanguageAsync };
