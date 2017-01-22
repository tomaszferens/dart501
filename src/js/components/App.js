import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Board from './Board';
import Score from './Score';

class App extends Component {
    render() {
        const { players } = this.props;
        const length = players.length;
        const player = `player-${length + 1}`;
        return (
            <div className="game">
                <div className="wrap">
                    <Board {...this.props}/>
                    <Score {...this.props}/>
                </div>
                <button
                    onClick={() => this.props.addPlayer(player)}
                    ref={(button) => this.firstButton = button}
                    disabled={this.props.players.length == 2}
                >
                ADD PLAYER
                </button>
                {
                    this.props.winner !== 'none' ? 
                    <h2>Winner: {this.props.winner.toUpperCase()}</h2>: null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    players: state.players,
    currentRound: state.currentRound,
    isStarted: state.isStarted,
    winner: state.winner
});

export default connect(mapStateToProps, actionCreators)(App);


