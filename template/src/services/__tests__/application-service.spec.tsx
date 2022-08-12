import { IframeMessageProxy } from 'iframe-message-proxy';

import * as application from '../application-service';

describe('Application-service', () => {
    const mockSendMessage = IframeMessageProxy.sendMessage;

    afterEach(() => IframeMessageProxy.reset());

    it('should have called the getApplicationDataAsync method', async () => {
        const expectedResult = { application: { accessKey: 'abc123' } };
        const expectedCall = { action: 'getApplication', content: null };

        mockSendMessage.mockResolvedValueOnce({ response: expectedResult });

        const response = await application.getApplicationDataAsync();

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(mockSendMessage).toHaveBeenCalledWith(expectedCall);
        expect(response).toEqual(expectedResult);
    });

    it('should throw error when call the getApplicationDataAsync method', async () => {
        const message = 'Network Error';

        mockSendMessage.mockRejectedValueOnce(new Error(message));

        const response = await application.getApplicationDataAsync();

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(response).toEqual(false);
    });

    it('should have called the getBotDataAsync method', async () => {
        const mockParameter = 'my-bot-id';
        const expectedResult = {
            application: { accessKey: 'abc123' },
            identity: mockParameter
        };
        const content = {
            destination: 'BlipService',
            command: {
                method: 'get',
                to: 'postmaster@portal.blip.ai',
                uri: `/applications/${mockParameter}`
            }
        };
        const expectedCall = { action: 'sendCommand', content };

        mockSendMessage.mockResolvedValueOnce({ response: expectedResult });

        const response = await application.getBotDataAsync(mockParameter);

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(mockSendMessage).toHaveBeenCalledWith(expectedCall);
        expect(response).toEqual(expectedResult);
    });

    it('should throw error when call the getBotDataAsync method', async () => {
        const mockParameter = 'my-bot-id';
        const message = 'Network Error';

        mockSendMessage.mockRejectedValueOnce(new Error(message));

        const response = await application.getBotDataAsync(mockParameter);

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(response).toEqual(false);
    });
});
