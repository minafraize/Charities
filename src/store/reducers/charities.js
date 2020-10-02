import * as actionTypes from '../actions/actionTypes';

const initialState = {
    charities: [],
    loading: false,
    errer: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_CHARITIES:
            return {
                ...state,
                loading: true,
                error: false,
                
            }
        case actionTypes.SET_CHARITIES:
            return {
                ...state,
                charities: action.charities,
                loading: false,
                error: false
            }
        case actionTypes.FETCH_CHARITIES_FAIL:
            return {
                ...state,
                loading: true,
                error: true
            }
        default: return state;
    }
}

export default reducer