import {
    ADD_MESSAGE
} from '../actions';

const initialState = {
    id: 0,
    text: 'Welcome use Redux',
    completed: false
};

export default function addmessage(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}
