import {connect} from 'react-redux';
import {incrAction, decrAction} from '../actions';
import Proximity from '../components/Proximity';

const mapStateToProps = state => ({
    value: state.distance.value
});

const mapDispatchToProps = dispatch => ({
    increment: () => {
        dispatch(incrAction())
    },
    decrement: () => {
        dispatch(decrAction())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Proximity);