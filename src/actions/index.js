export const ADD_MESSAGE = 'ADD_MESSAGE';

export function addMessage(data) {
    data.id++;
    data.text = "welcome use Redux" + data.id;
    console.log(data);
    return {
        type: ADD_MESSAGE,
        data
    };
}
