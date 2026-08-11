declare module 'country-list' {
    type Country = {
        code: string;
        name: string;
    };

    export function getData(): Country[];
}