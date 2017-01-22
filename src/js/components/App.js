import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { Button, Grid, Row, Modal } from 'react-bootstrap';

import Board from './Board';
import Score from './Score';

class App extends Component {
    render() {
        const { players } = this.props;
        const length = players.length;
        const player = `player-${length + 1}`;
        return (
            <Grid>
                <Row className="show-grid text-center">
                    <div className="game">
                        <div className="wrap">
                            <Board {...this.props} />
                            <Score {...this.props} />
                        </div>

                        <Button
                            bsStyle="primary"
                            onClick={() => this.props.addPlayer(player)}
                            disabled={this.props.isStarted}
                            >
                            ADD PLAYER
                        </Button>
                        <Modal show={this.props.winner !== 'none'} container={this} aria-labelledby="contained-modal-title">
                            <Modal.Header id="contained-moda-title">
                                <Modal.Title>
                                    Winner
                                    </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {this.props.winner.toUpperCase()}
                                <Modal.Footer>
                                    <Button onClick={() => this.props.reset()}>Close</Button>
                                </Modal.Footer>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Row>
            </Grid>
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


