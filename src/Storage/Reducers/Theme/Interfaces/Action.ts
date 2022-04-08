import { ThemeTypes } from "../Action-Types/Theme";

export interface Payload {
    theme: 'dark' | 'light'
}

export interface Theme {
    theme: 'dark' | 'light' | ''
}

export interface Action {
    type: ThemeTypes,
    payload: Theme
}