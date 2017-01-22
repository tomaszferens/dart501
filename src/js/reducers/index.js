import { combineReducers } from 'redux';
import players from './players';
import currentRound from './currentRound';
import isStarted from './isStarted';
import winner from './winner';

const rootReducer = combineReducers({
    players,
    currentRound,
    isStarted,
    winner
});

export default rootReducer;