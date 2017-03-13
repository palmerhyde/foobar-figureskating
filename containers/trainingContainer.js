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
    removeOpponentSkaterCardFromDeck,
    selectMyCardsSkater,
    setPotentialTrainingSkaters
} from '../actions/cardActions';

import { Training } from '../components/training';

const mapStateToProps = state => ({
    skaters: state.skaters,
    skaterDeck: state.skaterDeck,
    selectedSkater: state.selectedMyCardsSkaterCard,
    potentialTrainerSkaters: state.potentialTrainerSkaters
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
        removeOpponentSkaterCardFromDeck,
        selectMyCardsSkater,
        setPotentialTrainingSkaters
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Training)
