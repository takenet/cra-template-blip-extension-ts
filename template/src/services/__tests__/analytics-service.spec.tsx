import { IframeMessageProxy } from 'iframe-message-proxy';

import settings from 'config';
import * as analytics from '../analytics-service';

describe('Analytics-service', () => {
    const mockSendMessage = IframeMessageProxy.sendMessage;
    const originalEnv = process.env;

    beforeEach(() => {
        jest.resetModules();
        process.env = {
            ...originalEnv
        };
    });

    afterEach(() => {
        IframeMessageProxy.reset();
        jest.clearAllMocks();
        process.env = originalEnv;
    });

    it('should have called the track method', () => {
        const mockEvent = 'event-name';
        const mockProperties = {
            identity: 'labdoaxelatendimento',
            accessKey: 'A1234567890=='
        };

        const mockCallBack = jest.fn();

        const expectedSegmentCall = {
            action: 'segment',
            content: {
                method: 'createApplicationTrack',
                parameters: {
                    trackEvent: `${settings?.segment?.prefix}-${mockEvent}`,
                    payload: {
                        ...mockProperties,
                        environment: 'prd'
                    }
                }
            }
        };

        mockSendMessage.mockResolvedValueOnce({
            response: ''
        });

        const mockMethod = jest.spyOn(analytics, 'track');

        analytics.track(mockEvent, mockProperties, mockCallBack);

        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(
            mockEvent,
            mockProperties,
            mockCallBack
        );

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(mockSendMessage).toHaveBeenCalledWith(expectedSegmentCall);
    });

    it('should throw error when call the track method', () => {
        const mockCallback = jest.fn();
        const mockEvent = 'event-name';
        const mockProperties = {
            identity: 'labdoaxelatendimento',
            accessKey: 'A1234567890=='
        };

        const message = 'Network Error';
        mockSendMessage.mockRejectedValueOnce(new Error(message));

        const mockMethod = jest.spyOn(analytics, 'track');

        analytics.track(mockEvent, mockProperties, mockCallback);

        expect(mockMethod).toHaveBeenCalledTimes(1);
    });

    it('should have called the track method in dev environment', async () => {
        // process.env.NODE_ENV = 'development';
        Object.defineProperty(process.env, 'NODE_ENV', {
            value: 'development'
        });

        const mockEvent = 'event-name';
        const mockProperties = {
            identity: 'labdoaxelatendimento',
            accessKey: 'A1234567890=='
        };

        const mockMethod = jest.spyOn(analytics, 'track');

        const result = await analytics.track(mockEvent, mockProperties);

        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(result).toEqual(undefined);
    });

    it('should have called the page method', () => {
        const mockEvent = { pathname: '/', state: {} };
        const mockProperties = {
            name: 'Home'
        };

        const mockMethod = jest.spyOn(analytics, 'page');

        analytics.page(mockEvent, mockProperties);

        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(mockEvent, mockProperties);
    });
});
