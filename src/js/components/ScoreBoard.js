import React, { Component } from 'react';

class ScoreBoard extends Component {
    render() {
        return (
            <div className="score-board">
                <div className="score-first-player">
                    { this.props.players[0] ? 
                        <div>
                            <h2>{this.props.players[0].name}</h2>
                            <p>{this.props.players[0].score}</p>
                            <p>{this.props.players[0].throws}</p>
                        </div>
                        : null
                    }
                </div>
                {this.props.children}
                <div className="score-second-player">
                    { this.props.players[1] ? 
                        <div>
                            <h2>{this.props.players[1].name}</h2>
                            <p>{this.props.players[1].score}</p>
                            <p>{this.props.players[1].throws}</p>
                        </div>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default ScoreBoard;