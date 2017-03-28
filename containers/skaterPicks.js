import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {
    pickSelected
} from '../actions/cardActions';

import { SkaterPicks } from '../components/skaterpicks';

const mapStateToProps = state => ({
    picks: state.picks
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        pickSelected
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SkaterPicks)