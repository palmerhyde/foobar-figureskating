import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {
    setSkaterTrainingListStore
} from '../actions/cardActions';

import { ApplyTraining } from '../components/applytraining';

const mapStateToProps = state => ({
    selectedSkater: state.selectedMyCardsSkaterCard,
    skaterTrainingList: state.skaterTrainingList
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setSkaterTrainingListStore
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ApplyTraining)
