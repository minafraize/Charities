import * as actionTypes from './actionTypes'
import axios from '../../axios-item';

export const startCharities = () => {
    return {
        type: actionTypes.START_CHARITIES
    }
}

export const setCharities = (charities) => {
    return {
        type: actionTypes.SET_CHARITIES,
        charities: charities
    }
}

export const fetchCharitiesFail = (error) => {
    return {
        type: actionTypes.FETCH_CHARITIES_FAIL,
        error: error
    }
}

// Fetching Data

export const initCharities = () => {
    return dispatch => {
        dispatch(startCharities())
        axios.get('ngos')
        .then( res => {
            dispatch(setCharities(res.data.data))
        })
        .catch(err => {
            dispatch(fetchCharitiesFail(err))
        })
    }
}
