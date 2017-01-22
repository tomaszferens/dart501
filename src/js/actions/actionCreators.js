import {
    ADD_PLAYER,
    CHANGE_PLAYER,
    INCREMENT_THROWS,
    START_GAME,
    CLEAR_THROWS,
    CHANGE_SCORE,
    SET_WINNER
} from './actionTypes';

const addPlayer = (i) => ({
    type: ADD_PLAYER,
    i
});

const changePlayer = (name) => ({
    type: CHANGE_PLAYER,
    name
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

const changeScore = (i, points) => ({
    type: CHANGE_SCORE,
    points,
    i
});

const setWinner = (name) => ({
    type: SET_WINNER,
    name
});

export { 
    addPlayer, 
    changePlayer, 
    incrementThrows, 
    startGame,
    clearThrows,
    changeScore,
    setWinner
};