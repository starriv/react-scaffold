import {
    combineReducers
} from 'redux';
import addmessage from './addmessage';
import {
    routerReducer
} from 'react-router-redux';

const rootReducer = combineReducers({
    addmessage,
    routing: routerReducer
});

export default rootReducer;
