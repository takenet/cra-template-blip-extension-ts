type Language = {
    default: string;
    debug: boolean;
};

type Blip = {
    url: string;
    portalIdentityUri: string;
    domain: string;
};

type Api = {
    url: string;
    key: string;
};

type Segment = { prefix: string };

type Bucket = { key: string };

type DateTime = {
    default: string;
    time: string;
    date: string;
};

export type Settings = {
    env?: string;
    language?: Language;
    blip?: Blip;
    api?: Api;
    segment?: Segment;
    bucket?: Bucket;
    datetime?: DateTime;
    defaultExtensionImage?: string;
    repositoryUrl?: string;
};
