import { IframeMessageProxy } from 'iframe-message-proxy';

import * as user from '../user-service';

describe('User-service', () => {
    const mockSendMessage = IframeMessageProxy.sendMessage;

    afterEach(() => IframeMessageProxy.reset());

    it('should have called the getLoggedUserAsync method', async () => {
        const expectedResult = { fullName: 'Chuck Norris', culture: 'en' };
        const content = {
            destination: 'BlipService',
            command: {
                method: 'get',
                uri: '/account'
            }
        };
        const expectedCall = { action: 'sendCommand', content };

        mockSendMessage.mockResolvedValueOnce({ response: expectedResult });

        const response = await user.getLoggedUserAsync();

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(mockSendMessage).toHaveBeenCalledWith(expectedCall);
        expect(response).toEqual(expectedResult);
    });

    it('should throw error when call the getLoggedUserAsync method', async () => {
        const message = 'Network Error';

        mockSendMessage.mockRejectedValueOnce(new Error(message));

        const response = await user.getLoggedUserAsync();

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(response).toEqual(false);
    });

    it('should have called the userHasPermissionAsync method', async () => {
        const content = {
            permissionType: 'write',
            customArea: 'team'
        };
        const expectedCall = { action: 'hasPermissions', content };

        mockSendMessage.mockResolvedValueOnce({ response: true });

        const response = await user.userHasPermissionAsync();

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(mockSendMessage).toHaveBeenCalledWith(expectedCall);
        expect(response).toEqual(true);
    });

    it('should throw error when call the userHasPermissionAsync method', async () => {
        const message = 'Network Error';

        mockSendMessage.mockRejectedValueOnce(new Error(message));

        const response = await user.userHasPermissionAsync();

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(response).toEqual(false);
    });

    it('should have called the getCurrentLanguageAsync method', async () => {
        const expectedResult = { culture: 'en' };
        const expectedCall = { action: 'getCurrentLanguage' };

        mockSendMessage.mockResolvedValueOnce({ response: expectedResult });

        const response = await user.getCurrentLanguageAsync();

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(mockSendMessage).toHaveBeenCalledWith(expectedCall);
        expect(response).toEqual(expectedResult);
    });
});
