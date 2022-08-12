type Extras = {
    cookies?: string;
    lastUsedTenants?: string;
    acceptedPlugins?: string;
    isOldUser?: string;
};

export type User = {
    fullName: string;
    alternativeAccount: string;
    identity: string;
    email: string;
    phoneNumber: string;
    culture: string;
    extras?: Extras;
    creationDate: string;
};
