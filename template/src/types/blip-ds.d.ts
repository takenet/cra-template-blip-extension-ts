import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { JSX as LocalJSX } from 'blip-ds/loader';

type StencilToReactElements<T = LocalJSX.IntrinsicElements> = {
    [P in keyof T]?: T[P] &
        Omit<DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>, 'className'> & {
            class?: string;
        };
};

type StencilToReactRef<T = HTMLElementTagNameMap> = {
    [P in keyof T]: {
        ref?: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>['ref'];
    };
};

type StencilToReact<
    T = LocalJSX.IntrinsicElements,
    U = HTMLElementTagNameMap
> = StencilToReactElements<T> & StencilToReactRef<U>;

declare global {
    export namespace JSX {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface IntrinsicElements extends StencilToReact {}
    }
}
