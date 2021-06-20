import * as actionTypes from './actionTypes';
import axios from '../../axios-records';

export const liftWeightStart = () => {
    return {
        type: actionTypes.ADD_LIFT_START
    };
};

export const liftWeightSuccess = (liftData) => {
    return {
        type: actionTypes.ADD_LIFT_SUCCESS,
        liftData: liftData
    };
};

export const liftWeightFail = (error) => {
    return {
        type: actionTypes.ADD_LIFT_FAIL,
        error: error
    };
}

export const addLift = (liftData) => {
    return dispatch => {
        dispatch(liftWeightStart());
        axios.post('/lift.json', liftData)
            .then(response => {
                dispatch(liftWeightSuccess(liftData));
            })
            .catch( error => {
                dispatch(liftWeightFail(error));
            });
    }
};