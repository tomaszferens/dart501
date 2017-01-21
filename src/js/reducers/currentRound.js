import {
    CHANGE_PLAYER
} from '../actions/actionTypes';

const currentRound = (state = 'none', action) => {
    switch (action.type) {
        case CHANGE_PLAYER:
            return action.payload;
        default:
            return state;
    }
}

export default currentRound;