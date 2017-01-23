import React from 'react';
import dataPoints from '../data/dataPoints.js';
import numbers from '../data/numbers.js';

function Board(props) {
    function handlePlayer(i, points, length) {
        if (props.players[i].score - points > 0) {
            props.incrementThrows(i);
            props.changeScore(i, points);
            props.addPoint(i, points);
            if (props.players[i].throws === 2) {
                props.clearThrows(i);
                props.changePlayer(props.players[(i + 1) % length].name);
            }
        } else if (props.players[i].score - points < 0) {
            props.incrementThrows(i);
            props.addPoint(i, points);
            if (props.players[i].throws === 2) {
                props.clearThrows(i);
                props.changePlayer(props.players[(i + 1) % length].name);
            }
        } else {
            props.changeScore(i, points);
            props.addPoint(i, points);
            props.setWinner(props.players[i].name);
            props.startGame();
        }
    }

    function handleClick(e) {
        const points = Number(e.target.dataset.point);
        const length = props.players.length;
        if (props.winner === 'none' && length >= 2) {

            if (props.currentRound === 'none') {
                props.startGame();
                props.changePlayer(props.players[0].name);
            }

            for (let i = 0; i < length; i++) {
                if (props.currentRound === props.players[i].name) {
                    handlePlayer(i, points, length);
                }
            }
        }
    }

    const animation = {
        animation: 'mymove 10s infinite'
    };

    const styles = {
        textAnchor: 'middle',
        fontWeight: '200px',
        alignmentBaseline: 'middle'
    };


    return (
        <svg style={props.isStarted ? animation : null} version="1.1" viewBox="-250 -250 500 500" width="200mm">
            <defs>
                <line id="refwire" stroke="Silver" strokeWidth="1" x1="2.566" x2="26.52" y1="16.20" y2="167.4" />
                <path d="M 0 0 L 15.64 98.77 A 100 100 0 0 1 -15.64 98.77 Z" id="SLICE" strokeWidth="0" />
                <use id="double" transform="scale(1.695)" xlinkHref="#SLICE" />
                <use id="outer" transform="scale(1.605)" xlinkHref="#SLICE" />
                <use id="triple" transform="scale(1.065)" xlinkHref="#SLICE" />
                <use id="inner" transform="scale(0.975)" xlinkHref="#SLICE" />
            </defs>
            <g transform="scale(1,-1)" >
                <circle fill="black" r="226" data-point="0" onClick={(e) => handleClick(e)} />
                <g id="dartboard">
                    {
                        dataPoints.map((item, key) => (
                            <g transform={`rotate(${item.rotate})`} key={key}>
                                <use fill={item.firstFill} xlinkHref="#double" data-point={`${item.double}`} onClick={(e) => handleClick(e)} />
                                <use fill={item.secondFill} xlinkHref="#outer" data-point={`${item.outer}`} onClick={(e) => handleClick(e)} />
                                <use fill={item.firstFill} xlinkHref="#triple" data-point={`${item.triple}`} onClick={(e) => handleClick(e)} />
                                <use fill={item.secondFill} xlinkHref="#inner" data-point={`${item.inner}`} onClick={(e) => handleClick(e)} />
                            </g>
                        ))
                    }

                    <circle fill="green" r="16.4" strokeWidth="0" data-point="25" onClick={(e) => handleClick(e)} />
                    <circle fill="red" r="6.85" strokeWidth="0" data-point="50" onClick={(e) => handleClick(e)} />
                    <g id="grid">
                        <use xlinkHref="#refwire" />
                        {
                            dataPoints
                                .filter(item => item.rotate > 0)
                                .map((item, key) => (
                                    <use key={key} transform={`rotate(${item.rotate})`} xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                                ))
                        }
                        {
                            ['169.5', '160.5', '106.5', '97.5', '16.4', '6.85'].map((r, key) => (
                                <circle key={key} fill="none" r={r} stroke="Silver" strokeWidth="1" data-point="0" onClick={(e) => handleClick(e)} />
                            ))
                        }
                    </g>
                </g>
            </g>
            <g id="numbers" pointerEvents="none">
            {
                numbers.map((number, key) => (
                    <text key={key} fill="Silver" fontSize="30" style={styles} transform={`rotate(${number.rotate})`} y={`${number.y}`}>
                        {number.number}
                    </text>
                ))
            }
            </g>
        </svg>
    );
}

export default Board;