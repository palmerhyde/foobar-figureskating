import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { loadSkaterCards, loadMoveCards } from '../actions/cardActions';
import { HomeScreen } from '../HomeScreen';

const mapStateToProps = state => ({
    skaters: state.skaters,
    moves: state.moves
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loadSkaterCards,
        loadMoveCards
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)