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
    resetGameScore,
    loadSkaterDeck,
    incrementTurn,
    removeOpponentSkaterCardFromDeck} from '../actions/cardActions';

import { GameScreen } from '../GameScreen';

const mapStateToProps = state => ({
    skaters: state.skaters,
    moves: state.moves,
    opponentSkaterCard: state.opponentSkaterCard,
    selectedSkaterCard: state.selectedSkaterCard,
    score: state.score,
    gameState: state.gameState,
    skaterDeck: state.skaterDeck,
    opponentDeck: state.opponentDeck
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
        resetGameScore,
        loadSkaterDeck,
        incrementTurn,
        removeOpponentSkaterCardFromDeck
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)