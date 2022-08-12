class IframeMessageProxyConstants {
    static COMMAND_METHODS = {
        GET: 'get',
        SET: 'set',
        DELETE: 'delete',
        OBSERVE: 'observe',
        SUBSCRIBE: 'subscribe'
    };

    static COMMAND_STATUS = {
        SUCCESS: 'success',
        FAILURE: 'failure'
    };

    static NOTIFICATION_EVENTS = {
        ACCEPTED: 'accepted',
        VALIDATED: 'validated',
        AUTHORIZED: 'authorized',
        DISPATCHED: 'dispatched',
        RECEIVED: 'received',
        CONSUMED: 'consumed'
    };

    static DESTINATIONS = {
        MESSAGING_HUB_SERVICE: 'MessagingHubService',
        BLIP_SERVICE: 'BlipService'
    };

    static ACTIONS = {
        SEND_COMMAND: 'sendCommand',
        START_LOADING: 'startLoading',
        STOP_LOADING: 'stopLoading',
        HEIGHT_CHANGE: 'heightChange',
        SHOW_MODAL: 'showModal',
        HIDE_NAVBAR: 'hideNavbar',
        SHOW_NAVBAR: 'showNavbar',
        GET_CURRENT_LANGUAGE: 'getCurrentLanguage',
        TOAST: 'toast',
        GET_APPLICATION: 'getApplication',
        HAS_PERMISSIONS: 'hasPermissions',
        GET_PERMISSIONS_OBJECT: 'getPermissionsObject',
        GET_USER_CONTEXT: 'getUserContext',
        SEGMENT: 'segment'
    };
}

export default IframeMessageProxyConstants;
