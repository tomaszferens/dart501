import {
    START_GAME
} from '../actions/actionTypes';

const isStarted = (state = false, action) => {
    switch (action.type) {
        case START_GAME:
            return !state;
        default:
            return state;
    }
}

export default isStarted;