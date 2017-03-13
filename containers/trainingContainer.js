import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {
    setPotentialTrainingSkaters,
    addSkaterToTrainingList,
    removeSkaterFromTrainingList
} from '../actions/cardActions';

import { Training } from '../components/training';

const mapStateToProps = state => ({
    selectedSkater: state.selectedMyCardsSkaterCard,
    potentialTrainerSkaters: state.potentialTrainerSkaters
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setPotentialTrainingSkaters,
        addSkaterToTrainingList,
        removeSkaterFromTrainingList
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Training)
