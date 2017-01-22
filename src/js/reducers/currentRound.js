import {
    CHANGE_PLAYER
} from '../actions/actionTypes';

const currentRound = (state = 'none', { name, type }) => {
    switch (type) {
        case CHANGE_PLAYER:
            return name;
        default:
            return state;
    }
}

export default currentRound;