import * as IMP from 'iframe-message-proxy';

const useMock = IMP.IframeMessageProxy;

useMock.sendMessage = jest.fn();

useMock.reset = () => {
    useMock.sendMessage.mockClear();
};

module.exports = {
    IframeMessageProxy: useMock,
    EventAction: IMP.EventAction
};
