import {
    ADD_PLAYER,
    CHANGE_PLAYER,
    INCREMENT_THROWS,
    START_GAME,
    CLEAR_THROWS
} from './actionTypes';

const addPlayer = (i) => ({
    type: ADD_PLAYER,
    i
});

const changePlayer = (name) => ({
    type: CHANGE_PLAYER,
    payload: name
});

const incrementThrows = (i) => ({
    type: INCREMENT_THROWS,
    i
});

const startGame = () => ({
    type: START_GAME
});

const clearThrows = (i) => ({
    type: CLEAR_THROWS,
    i
});

export { 
    addPlayer, 
    changePlayer, 
    incrementThrows, 
    startGame,
    clearThrows
};