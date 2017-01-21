import { combineReducers } from 'redux';
import players from './players';
import currentRound from './currentRound';
import isStarted from './isStarted';

const rootReducer = combineReducers({
    players,
    currentRound,
    isStarted
});

export default rootReducer;