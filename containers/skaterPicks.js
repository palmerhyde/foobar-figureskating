import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {
    setPotentialTrainingSkaters,
    swapSkater
} from '../actions/cardActions';

import { SkaterPicks } from '../components/skaterpicks';

const mapStateToProps = state => ({
    allSkaters: state.allSkaters,
    skaters : state.skaters,
    picks: state.picks
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setPotentialTrainingSkaters,
        swapSkater
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SkaterPicks)