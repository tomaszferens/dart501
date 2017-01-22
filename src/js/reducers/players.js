import {
    ADD_PLAYER,
    INCREMENT_THROWS,
    CLEAR_THROWS,
    CHANGE_SCORE
} from '../actions/actionTypes';

const players = (state = [], {i, ...action}) => {
    switch (action.type) {
    case ADD_PLAYER:
        return [
            ...state,
            {
                name: i,
                score: 501,
                throws: 0
            }
        ];
    case INCREMENT_THROWS:
        return [
            ...state.slice(0, i),
            {...state[i], throws: state[i].throws + 1},
            ...state.slice(i + 1)
        ];
    case CLEAR_THROWS:
        return [
            ...state.slice(0, i),
            { ...state[i], throws: 0 },
            ...state.slice(i + 1)
        ];
    case CHANGE_SCORE:
        return [
            ...state.slice(0, i),
            { ...state[i], score: state[i].score - action.points },
            ...state.slice(i + 1)
        ];
    default:
        return state;
    }
};


export default players;