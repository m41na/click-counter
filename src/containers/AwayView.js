import {connect} from 'react-redux';
import {resetAction} from '../actions';
import AwayView from '../components/AwayView';

const mapStateToProps = state => ({
    value: state.distance.value
});

const mapDispatchToProps = dispatch => ({
    reset: () => {
        dispatch(resetAction())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AwayView);