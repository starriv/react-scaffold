import * as ActionType from '../constants/ActionTypes';

export function addMessage(data) {
    data.id++;
    data.text = "welcome use Redux" + data.id;
    console.log(data);
    return {
        type: ActionType.ADD_MESSAGE,
        data
    };
}
