import * as Message from './../constants/Message';
import * as types from './../constants/ActionType';

var initialState = Message.MSG_WELLCOME;

const message = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message;
    }
    return state;
}

export default message;