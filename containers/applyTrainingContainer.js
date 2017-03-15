import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {
    setPotentialTrainingSkaters,
    setSkaterTrainingList,
} from '../actions/cardActions';

import { ApplyTraining } from '../components/applytraining';

const mapStateToProps = state => ({
    selectedSkater: state.selectedMyCardsSkaterCard,
    skaterTrainingList: state.skaterTrainingList
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setPotentialTrainingSkaters,
        setSkaterTrainingList,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ApplyTraining)
