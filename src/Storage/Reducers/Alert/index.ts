import { AlertTypes } from './Action-Types/Alert';
import { Action, Alert } from './Interfaces/Action';

const initialState: Alert = {
    open: false,
    title: '',
    description: '',
    typeAlert: 'error'
}

const AlertReducer = (state: Alert = initialState, action: Action) => {
    switch (action.type) {
        case AlertTypes.OPEN_ALERT:
            return {
                open: true,
                ...action.payload
            }
        case AlertTypes.CLOSE_ALERT:
            return initialState
        default:
            return state
    }
}

export default AlertReducer;