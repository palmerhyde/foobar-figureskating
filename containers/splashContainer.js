import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {
    loadAllSkaters,
} from '../actions/cardActions';

import { SplashScreen } from '../components/splash';

const mapStateToProps = state => ({
    allSkaters : state.allSkaters
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loadAllSkaters
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)