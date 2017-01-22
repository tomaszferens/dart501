import React from 'react';

function Score ({ players }) {
    return (
        <div className="score">
            {
                players.length != 0 ?
                players.map((player, i) => {
                    return (
                        <div className="players" key={i}>
                            <div>
                                <h1>{player.name.toUpperCase()}</h1>
                                <p>Throws: {player.throws}</p>
                                <p>Score: {player.score}</p>
                            </div>
                        </div>
                    );
                }) : null
            }
        </div>
    );
}

export default Score;