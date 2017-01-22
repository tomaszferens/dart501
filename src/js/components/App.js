import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Board from './Board';
import ScoreBoard from './ScoreBoard';

class App extends Component {
    render() {
        const { players } = this.props;
        const length = players.length;
        const player = `player-${length + 1}`;
        return (
            <div>
                <ScoreBoard {...this.props}>
                    <div>
                        <Board {...this.props} />
                        <button 
                            onClick={() => this.props.addPlayer(player)}
                            ref={(button) => this.firstButton = button}
                            disabled={this.props.players.length == 2}
                        >
                        ADD PLAYER
                        </button>
                    </div>
                </ScoreBoard>
                {
                    this.props.winner !== 'none' ? 
                    <h1>Winner: {this.props.winner}</h1> : null
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


