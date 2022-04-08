import { Dispatch } from 'redux';
import { AlertTypes } from '../Action-Types/Alert';
import { Action, Payload } from '../Interfaces/Action';

export const openAlert = (payload: Payload) => (dispatch: Dispatch<Action>) => dispatch({
    type: AlertTypes.OPEN_ALERT,
    payload
})

export const closeAlert = () => (dispatch: Dispatch<Action>) => dispatch({
    type: AlertTypes.CLOSE_ALERT,
})