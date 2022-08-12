export type ICreateTrack = {
    (
        event: string,
        payload?: Record<string, unknown>,
        callback?: (props?: unknown) => unknown
    ): void;
};

export type ITrack = {
    (
        event: string,
        properties?: Record<string, unknown>,
        callback?: (props?: unknown) => unknown
    ): void;
};

type Location = {
    pathname: string;
    state: unknown;
};

export type IPage = {
    (
        location: Location,
        properties?: Record<string, unknown>,
        callback?: (props?: unknown) => unknown
    ): void;
};
