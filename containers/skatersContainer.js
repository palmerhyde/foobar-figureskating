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
    selectMyCardsSkater
} from '../actions/cardActions';

import { Skaters } from '../components/skaters';

const mapStateToProps = state => ({
    skaterDeck: state.skaterDeck,
    selectedSkater: state.selectedMyCardsSkaterCard
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
        selectMyCardsSkater
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Skaters)
