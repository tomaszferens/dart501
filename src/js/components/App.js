import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Board from './Board';
import ScoreBoard from './ScoreBoard';

class App extends Component {
    componentDidUpdate() {
        if (this.props.players.length == 2) {
            this.firstButton.disabled = true;
        }


    }

    render() {
        const { players } = this.props;
        const player = players.length == 1 ? 'player2' : 'player1';
        return (
            <ScoreBoard players={players}>
                <div>
                    <Board {...this.props} />
                    <button 
                        onClick={() => this.props.addPlayer(player)}
                        ref={(button) => this.firstButton = button}
                    >
                    ADD PLAYER
                    </button>
                </div>
            </ScoreBoard>
        );
    }
}

const mapStateToProps = (state) => ({
    players: state.players,
    currentRound: state.currentRound,
    isStarted: state.isStarted
});

export default connect(mapStateToProps, actionCreators)(App);


