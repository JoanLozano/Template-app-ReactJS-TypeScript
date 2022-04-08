import { combineReducers } from 'redux';
import AlertReducer from './Alert';
import ThemeReducer from './Theme';

const reducers = combineReducers({
    alert: AlertReducer,
    theme: ThemeReducer
});

export default reducers;