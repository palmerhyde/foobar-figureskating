import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {
    setPotentialTrainingSkaters,
    setSkaterTrainingList,
    trainSkater
} from '../actions/cardActions';

import { Training } from '../components/training';

const mapStateToProps = state => ({
    selectedSkater: state.selectedMyCardsSkaterCard,
    potentialTrainerSkaters: state.potentialTrainerSkaters,
    skaterTrainingList: state.skaterTrainingList
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setPotentialTrainingSkaters,
        setSkaterTrainingList,
        trainSkater
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Training)
