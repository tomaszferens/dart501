import {
    SET_WINNER
} from '../actions/actionTypes';

const winner = (state = 'none', { name, ...action }) => {
    switch (action.type) {
    case SET_WINNER:
        return name;
    default:
        return state;
    }
};

export default winner;