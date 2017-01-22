import React from 'react';

function Board (props) {
    function handleClick(e) {
        const points = Number(e.target.dataset.point);
        if (props.winner === 'none') {

            if (props.currentRound == 'none') {
                props.startGame();
                props.changePlayer(props.players[0].name);
            } 
            
            else if (props.currentRound == props.players[0].name) {
                if (props.players[0].score - points > 0) {
                    props.incrementThrows(0);
                    props.changeScore(0, points);
                    if (props.players[0].throws == 2) {
                        props.clearThrows(0);
                        props.changePlayer(props.players[1].name);   
                    }
                } else if (props.players[0].score - points < 0) {
                    props.incrementThrows(0);
                    if (props.players[0].throws == 2) {
                        props.clearThrows(0);
                        props.changePlayer(props.players[1].name); 
                    }
                } else {
                    props.changeScore(0, points);
                    props.setWinner(props.players[0].name);
                    props.startGame();
                }
            } 
            
            
            else if (props.currentRound == props.players[1].name) {
                if (props.players[1].score - points > 0) {
                    props.incrementThrows(1);
                    props.changeScore(1, points);
                    if (props.players[1].throws == 2) {
                        props.clearThrows(1);
                        props.changePlayer(props.players[0].name);
                    }
                } else if (props.players[1].score - points < 0) {
                    props.incrementThrows(1);
                    if (props.players[1].throws == 2) {
                        props.clearThrows(1);
                        props.changePlayer(props.players[0].name);
                    }
                } else {
                    props.changeScore(1, points);
                    props.setWinner(props.players[1].name);
                    props.startGame();
                }
            }
        }
    }

    const animation = {
        animation: 'mymove 15s infinite'
    };

    const styles = {
        textAnchor: 'middle',
        fontWeight: '200px',
        alignmentBaseline: 'middle'
    };

    return (
        <svg style={props.isStarted ? animation : null} version="1.1" viewBox="-250 -250 500 500" width="200mm">
            <defs>
                <line id="refwire" stroke="Silver" strokeWidth="1" x1="2.566" x2="26.52" y1="16.20" y2="167.4"/>
                <path d="M 0 0 L 15.64 98.77 A 100 100 0 0 1 -15.64 98.77 Z" id="SLICE" strokeWidth="0"/>
                <use id="double" transform="scale(1.695)" xlinkHref="#SLICE"/>
                <use id="outer" transform="scale(1.605)" xlinkHref="#SLICE"/>
                <use id="triple" transform="scale(1.065)" xlinkHref="#SLICE"/>
                <use id="inner" transform="scale(0.975)" xlinkHref="#SLICE"/>
            </defs>
            <g transform="scale(1,-1)">
                <circle fill="black" r="226" data-point="0" onClick={(e) => handleClick(e)}/>
                <g id="dartboard">
                <g>
                    <use fill="red" xlinkHref="#double" data-point="40" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#outer" data-point="20" onClick={(e) => handleClick(e)} />
                    <use fill="red" xlinkHref="#triple" data-point="60" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#inner" data-point="20" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(18)">
                    <use fill="green" xlinkHref="#double" data-point="10" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#outer" data-point="5" onClick={(e) => handleClick(e)} />
                    <use fill="green" xlinkHref="#triple" data-point="15" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#inner" data-point="5" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(36)">
                    <use fill="red" xlinkHref="#double" data-point="24" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#outer" data-point="12" onClick={(e) => handleClick(e)} />
                    <use fill="red" xlinkHref="#triple" data-point="36" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#inner" data-point="12" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(54)">
                    <use fill="green" xlinkHref="#double" data-point="18" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#outer" data-point="9" onClick={(e) => handleClick(e)} />
                    <use fill="green" xlinkHref="#triple" data-point="27" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#inner" data-point="9" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(72)">
                    <use fill="red" xlinkHref="#double" data-point="28" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#outer" data-point="14" onClick={(e) => handleClick(e)} />
                    <use fill="red" xlinkHref="#triple" data-point="42" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#inner" data-point="14" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(90)">
                    <use fill="green" xlinkHref="#double" data-point="22" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#outer" data-point="11" onClick={(e) => handleClick(e)} />
                    <use fill="green" xlinkHref="#triple" data-point="33" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#inner" data-point="11" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(108)">
                    <use fill="red" xlinkHref="#double" data-point="16" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#outer" data-point="8" onClick={(e) => handleClick(e)} />
                    <use fill="red" xlinkHref="#triple" data-point="24" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#inner" data-point="8" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(126)">
                    <use fill="green" xlinkHref="#double" data-point="32" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#outer" data-point="16" onClick={(e) => handleClick(e)} />
                    <use fill="green" xlinkHref="#triple" data-point="48" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#inner" data-point="16" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(144)">
                    <use fill="red" xlinkHref="#double" data-point="14" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#outer" data-point="7" onClick={(e) => handleClick(e)} />
                    <use fill="red" xlinkHref="#triple" data-point="21" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#inner" data-point="7" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(162)">
                    <use fill="green" xlinkHref="#double" data-point="38" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#outer" data-point="19" onClick={(e) => handleClick(e)} />
                    <use fill="green" xlinkHref="#triple" data-point="57" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#inner" data-point="19" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(180)">
                    <use fill="red" xlinkHref="#double" data-point="6" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#outer" data-point="3" onClick={(e) => handleClick(e)} />
                    <use fill="red" xlinkHref="#triple" data-point="9" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#inner" data-point="3" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(198)">
                    <use fill="green" xlinkHref="#double" data-point="34" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#outer" data-point="17" onClick={(e) => handleClick(e)} />
                    <use fill="green" xlinkHref="#triple" data-point="51" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#inner" data-point="17" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(216)">
                    <use fill="red" xlinkHref="#double" data-point="4" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#outer" data-point="2" onClick={(e) => handleClick(e)} />
                    <use fill="red" xlinkHref="#triple" data-point="6" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#inner" data-point="2" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(234)">
                    <use fill="green" xlinkHref="#double" data-point="30" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#outer" data-point="15" onClick={(e) => handleClick(e)} />
                    <use fill="green" xlinkHref="#triple" data-point="45" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#inner" data-point="15" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(252)">
                    <use fill="red" xlinkHref="#double" data-point="20" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#outer" data-point="10" onClick={(e) => handleClick(e)} />
                    <use fill="red" xlinkHref="#triple" data-point="30" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#inner" data-point="10" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(270)">
                    <use fill="green" xlinkHref="#double" data-point="12" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#outer" data-point="6" onClick={(e) => handleClick(e)} />
                    <use fill="green" xlinkHref="#triple" data-point="18" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#inner" data-point="6" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(288)">
                    <use fill="red" xlinkHref="#double" data-point="26" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#outer" data-point="13" onClick={(e) => handleClick(e)} />
                    <use fill="red" xlinkHref="#triple" data-point="39" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#inner" data-point="13" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(306)">
                    <use fill="green" xlinkHref="#double" data-point="8" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#outer" data-point="4" onClick={(e) => handleClick(e)} />
                    <use fill="green" xlinkHref="#triple" data-point="12" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#inner" data-point="4" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(324)">
                    <use fill="red" xlinkHref="#double" data-point="36" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#outer" data-point="18" onClick={(e) => handleClick(e)} />
                    <use fill="red" xlinkHref="#triple" data-point="54" onClick={(e) => handleClick(e)} />
                    <use fill="black" xlinkHref="#inner" data-point="18" onClick={(e) => handleClick(e)} />
                </g>
                <g transform="rotate(342)">
                    <use fill="green" xlinkHref="#double" data-point="2" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#outer" data-point="1" onClick={(e) => handleClick(e)} />
                    <use fill="green" xlinkHref="#triple" data-point="3" onClick={(e) => handleClick(e)} />
                    <use fill="white" xlinkHref="#inner" data-point="1" onClick={(e) => handleClick(e)} />
                </g>
                <circle fill="green" r="16.4" strokeWidth="0" data-point="25" onClick={(e) => handleClick(e)} />
                <circle fill="red" r="6.85" strokeWidth="0" data-point="50" onClick={(e) => handleClick(e)} />
                <g id="grid">
                    <use xlinkHref="#refwire"/>
                    <use transform="rotate(18)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(36)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(54)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(72)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(90)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(108)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(126)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(144)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(162)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(180)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(198)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(216)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(234)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(252)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(270)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(288)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(306)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(324)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    <use transform="rotate(342)" xlinkHref="#refwire" data-point="0" onClick={(e) => handleClick(e)} />
                    
                    <circle fill="none" r="169.5" stroke="Silver" strokeWidth="1" data-point="0" onClick={(e) => handleClick(e)} />
                    <circle fill="none" r="160.5" stroke="Silver" strokeWidth="1" data-point="0" onClick={(e) => handleClick(e)} />
                    <circle fill="none" r="106.5" stroke="Silver" strokeWidth="1" data-point="0" onClick={(e) => handleClick(e)} />
                    <circle fill="none" r="97.5" stroke="Silver" strokeWidth="1" data-point="0" onClick={(e) => handleClick(e)} />
                    <circle fill="none" r="16.4" stroke="Silver" strokeWidth="1" data-point="0" onClick={(e) => handleClick(e)} />
                    <circle fill="none" r="6.85" stroke="Silver" strokeWidth="1" data-point="0" onClick={(e) => handleClick(e)} />
                </g>
                </g>
            </g>
            <g id="numbers" pointerEvents="none">    
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-288)" y="-200">13</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-270)" y="-200">6</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-306)" y="-200">4</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-324)" y="-200">18</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-342)" y="-200">1</text>
                <text fill="Silver" fontSize="30" style={styles}  y="-200">20</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-18)" y="-200">5</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-36)" y="-200">12</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-54)" y="-200">9</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-72)" y="-200">14</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-90)" y="-200">11</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(72)" y="200">8</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(54)" y="200">16</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(36)" y="200">7</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(18)" y="200">19</text>
                <text fill="Silver" fontSize="30" style={styles}  y="200">3</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-18)" y="200">17</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-36)" y="200">2</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-54)" y="200">15</text>
                <text fill="Silver" fontSize="30" style={styles}  transform="rotate(-72)" y="200">10</text>
            </g>
        </svg>
    );
}

export default Board;