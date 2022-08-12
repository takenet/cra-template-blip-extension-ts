enum ChannelsNames {
    Blipchat = 'blipchat',
    BusinessMessages = 'businessmessages',
    Infobip = 'infobip',
    Instagram = 'instagram',
    Mailgun = 'mailgun',
    Messenger = 'messenger',
    Skype = 'skype',
    Takeio = 'takeio',
    Telegram = 'telegram',
    WhatsApp = 'wa',
    Workplace = 'workplace',
    AppleBusinessChat = 'applebusinesschat',
    Facebook = 'facebook'
}

type BaseChannelsConfigurations = {
    IsChannelActive: 'True' | 'False';
    KeepConfigurations?: string[];
};

type Channel<
    T extends BaseChannelsConfigurations = BaseChannelsConfigurations
> = {
    name: ChannelsNames;
    configurations: T;
};

type ApplicationUserPermissionModel = {
    permissionClaim: number;
    permissionAction: number;
};

type Domain = {
    shortName: string;
    fqdn: string;
};

type Properties = {
    pageAccessToken: string;
    pageId: string;
    pageName?: string;
    pagePicture?: object;
};

type ApplicationDomainActivation = {
    domain: Domain;
    isActive: boolean;
    properties: Properties;
};

export interface Children {
    id?: number;
    identity: string;
    longName?: string;
    shortName?: string;
    service?: string;
    tenantUrl?: string;
    isOnline?: boolean;
    isPersistent?: boolean;
    warning?: boolean;
}

type Settings = {
    children?: Children[];
};

export type ApplicationJson = {
    accessKey?: string;
    disableNotify?: boolean;
    identifier?: string;
    messageReceivers?: Record<string, unknown>[];
    notificationReceivers?: Record<string, unknown>[];
    serviceProviderType?: string;
    settings: Settings;
    settingsType?: string;
    startupType?: string;
};

export interface Application {
    accessKey: string;
    applicationDomainActivations?: ApplicationDomainActivation[];
    applicationJson: ApplicationJson;
    applicationUserPermissionModel?: ApplicationUserPermissionModel[];
    channels?: Channel[];
    created?: string;
    description?: string;
    emailOwner?: string;
    hasPermission?: boolean;
    name?: string;
    shortName?: string;
    template?: string;
    updated?: string;
    imageUri?: string;
    id?: number;
    isTemplate?: boolean;
    isSubflow?: boolean;
    status?: string;
    tenantId?: string;
    plan?: string;
    cluster?: string;
}

type PromiseStatus = 'fulfilled' | 'rejected';

export interface PromiseSettledArray {
    status: PromiseStatus;
    value: Children;
    reason?: string;
}

export interface Bot {
    accessKey?: string;
    created?: string;
    description?: string;
    emailOwner?: string;
    hasPermission?: boolean;
    identity: string;
    imageUri?: string;
    name: string;
    shortName?: string;
    template?: string;
    updated?: string;
}
