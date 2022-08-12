import { IframeMessageProxy } from 'iframe-message-proxy';
import IMP from 'constants/iframe-message-proxy';

import settings from 'config';
import { ICreateTrack, IPage, ITrack } from './analytics-types';
import { toKebabCase } from 'utils/string';

const TRACK_METHOD = 'createApplicationTrack';

const createTrackAsync: ICreateTrack = async (event, payload, callback) => {
    try {
        const trackEvent = toKebabCase(`${settings?.segment?.prefix}-${event}`);

        if (process.env.NODE_ENV === 'development') {
            return false;
        }

        payload = {
            ...payload,
            environment: settings.env
        };

        await IframeMessageProxy.sendMessage({
            action: IMP.ACTIONS.SEGMENT,
            content: {
                method: TRACK_METHOD,
                parameters: {
                    trackEvent,
                    payload
                }
            }
        });
        callback && callback();
    } catch (err) {
        callback && callback(err);
    }
};

const track: ITrack = (event, properties, callback) => {
    createTrackAsync(event, properties, callback);
};

const page: IPage = (location, properties, callback) => {
    const { pathname, state } = location;

    track(`page-opened`, { ...properties, pathname, state }, callback);
};

export { track, page };
