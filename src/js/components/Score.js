import React from 'react';
import { Label } from 'react-bootstrap';

function Score ({ players, ...props }) {
    return (
        <div className="score">
            {
                players.length != 0 ?
                players.map((player, i) => {
                    return (
                        <div className="players" key={i}>
                            <div>
                                <Label bsStyle={props.currentRound === player.name ? 'success' : 'default'}>{player.name.toUpperCase()}</Label>
                                <p>Throws: {player.throws}</p>
                                <p>Score: {player.score}</p>
                                <p>points: </p>
                                <ul>
                                    {
                                        player.points.map((point,
                                        i) => <li key={i}>{point}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    );
                }) : null
            }
        </div>
    );
}

export default Score;