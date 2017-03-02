import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {
    loadSkaterCards,
    selectSkaterCard,
    waitForMoves,
    waitForOpponentSkater,
    setTurnInProgress,
    resetSelectedSkaterCard,
    resetOpponentSkaterCard,
    resetGameScore} from '../actions/cardActions';

import { HomeScreen } from '../HomeScreen';

const mapStateToProps = state => ({
    skaters: state.skaters,
    move: state.move,
    opponentSkaterCard: state.opponentSkaterCard,
    selectedSkaterCard: state.selectedSkaterCard,
    score: state.score,
    gameState: state.gameState
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loadSkaterCards,
        selectSkaterCard,
        waitForMoves,
        waitForOpponentSkater,
        setTurnInProgress,
        resetSelectedSkaterCard,
        resetOpponentSkaterCard,
        resetGameScore
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)