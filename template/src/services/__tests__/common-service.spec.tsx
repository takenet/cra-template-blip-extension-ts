import { IframeMessageProxy } from 'iframe-message-proxy';

import * as common from '../common-service';

describe('Common-service', () => {
    const mockSendMessage = IframeMessageProxy.sendMessage;

    afterEach(() => IframeMessageProxy.reset());

    it('should have called the startLoading method', () => {
        const expectedCall = { action: 'startLoading' };

        common.startLoading();

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(mockSendMessage).toHaveBeenCalledWith(expectedCall);
    });

    it('should have called the stopLoading method', () => {
        const expectedCall = { action: 'stopLoading' };
        common.stopLoading();

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(mockSendMessage).toHaveBeenCalledWith(expectedCall);
    });

    it('should have called the setHeight method', () => {
        const mockParameter = 500;
        const expectedCall = { action: 'heightChange', content: mockParameter };

        common.setHeight(mockParameter);

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(mockSendMessage).toHaveBeenCalledWith(expectedCall);
    });

    it('should have called the showToast method', () => {
        const mockParameter = {
            type: 'success',
            message: 'test'
        };
        const expectedCall = { action: 'toast', content: mockParameter };

        common.showToast(mockParameter);

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(mockSendMessage).toHaveBeenCalledWith(expectedCall);
    });

    it('should have called the showModal method', () => {
        const mockParameter = {
            title: 'Modal Test',
            body: 'Foo boo',
            confirm: 'ok',
            cancel: 'cancel'
        };
        const expectedCall = { action: 'showModal', content: mockParameter };

        common.showModal(mockParameter.title, mockParameter.body);

        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(mockSendMessage).toHaveBeenCalledWith(expectedCall);
    });

    it('should have called the withLoadingAsync method', async () => {
        const mockFunction = jest.fn();

        await common.withLoadingAsync(mockFunction);

        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(mockSendMessage._isMockFunction).toBeTruthy();
        expect(mockSendMessage).toHaveBeenCalledTimes(2);
    });
});
