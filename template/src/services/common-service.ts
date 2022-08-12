import { IframeMessageProxy } from 'iframe-message-proxy';
import IMP from 'constants/iframe-message-proxy';

interface ShowToastProps {
    type: string;
    message: string;
    title?: string;
    duration?: number;
}

interface IShowModal {
    (body: string, title?: string, confirm?: string, cancel?: string): void;
}

const startLoading = () =>
    IframeMessageProxy.sendMessage({
        action: IMP.ACTIONS.START_LOADING
    });

const stopLoading = () =>
    IframeMessageProxy.sendMessage({
        action: IMP.ACTIONS.STOP_LOADING
    });

const setHeight = (height: number): void =>
    IframeMessageProxy.sendMessage({
        action: IMP.ACTIONS.HEIGHT_CHANGE,
        content: height
    });

const showToast = (toast: ShowToastProps): void =>
    IframeMessageProxy.sendMessage({
        action: IMP.ACTIONS.TOAST,
        content: toast
    });

const showModal: IShowModal = (
    title,
    body,
    confirm = 'ok',
    cancel = 'cancel'
) =>
    IframeMessageProxy.sendMessage({
        action: IMP.ACTIONS.SHOW_MODAL,
        content: {
            title,
            body,
            confirm,
            cancel
        }
    });

const withLoadingAsync = async (func: () => void): Promise<void> => {
    startLoading();
    try {
        return await func();
    } finally {
        stopLoading();
    }
};

export {
    startLoading,
    stopLoading,
    setHeight,
    showToast,
    withLoadingAsync,
    showModal
};
