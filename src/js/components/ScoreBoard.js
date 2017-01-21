import React, { Component } from 'react';

class ScoreBoard extends Component {
    render() {
        return (
            <div className="score-board">
                <div className="score-first-player">
                    {this.props.players[0] ? this.props.players[0].name : null}
                </div>
                {this.props.children}
                <div className="score-second-player">
                    {this.props.players[1] ? this.props.players[1].name : null}
                </div>
            </div>
        );
    }
}

export default ScoreBoard;