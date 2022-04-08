import { AlertColor } from "@mui/material";
import { AlertTypes } from "../Action-Types/Alert";

export interface Alert {
    open: boolean;
    title: string;
    description: string;
    typeAlert: AlertColor;
}

export interface Payload {
    title: string;
    description: string;
    typeAlert: AlertColor;
}

interface OPEN_ALERT {
    type: AlertTypes.OPEN_ALERT;
    payload: Payload;
}

interface CLOSE_ALERT {
    type: AlertTypes.CLOSE_ALERT
}

export type Action = OPEN_ALERT | CLOSE_ALERT