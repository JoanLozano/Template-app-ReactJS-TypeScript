import { Dispatch } from 'redux';
import { ThemeTypes } from '../Action-Types/Theme';
import { Action, Payload } from '../Interfaces/Action';

export const changeTheme = (payload: Payload) => (dispatch: Dispatch<Action>) => dispatch({
    type: ThemeTypes.SET_THEME,
    payload
})