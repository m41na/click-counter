import { combineReducers} from 'redux';
import {INCR, DECR, RESET} from '../actions';

const initialState = {
    value: 0
};

const distance = (state = initialState, action) => {
    switch(action.type){
        case INCR: {
            return {...state, value: state.value + 1};
        }
        case DECR: {
            return {...state, value: state.value - 1};
        }
        case RESET: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({distance});