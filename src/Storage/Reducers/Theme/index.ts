import { ThemeTypes } from './Action-Types/Theme';
import { Theme, Action } from './Interfaces/Action';

const initialState: Theme  = {
    theme: ''
}

const ThemeReducer = (state: Theme = initialState, action: Action) => {
    switch (action.type) {
        case ThemeTypes.SET_THEME:
            return {
                theme: action.payload.theme
            }
        default:
            return state
    }
}

export default ThemeReducer;