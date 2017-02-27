import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { loadSkaterCards, selectSkaterCard, waitForMoves, waitForOpponentSkater } from '../actions/cardActions';
import { HomeScreen } from '../HomeScreen';

const mapStateToProps = state => ({
    skaters: state.skaters,
    move: state.move,
    opponentSkaterCard: state.opponentSkaterCard,
    selectedSkaterCard: state.selectedSkaterCard
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loadSkaterCards,
        selectSkaterCard,
        waitForMoves,
        waitForOpponentSkater
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)