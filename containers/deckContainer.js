import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {
    setPotentialTrainingSkaters,
    swapSkater
} from '../actions/cardActions';

import { Deck } from '../components/deck';

const mapStateToProps = state => ({
    //skaters : state.skaters,
    skaterDeck : state.skaterDeck,
    potentialTrainerSkaters: state.potentialTrainerSkaters,
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setPotentialTrainingSkaters,
        swapSkater
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Deck)
