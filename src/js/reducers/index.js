import { combineReducers } from 'redux';
import players from './players';
import currentRound from './currentRound';
import isStarted from './isStarted';
import winner from './winner';

const appReducer = combineReducers({
    players,
    currentRound,
    isStarted,
    winner
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
    }
    
    return appReducer(state, action);
};

export default rootReducer;