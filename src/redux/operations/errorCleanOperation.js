import cleaningActions from '../actions/errorCleaningActions';

const errorCleanOperation = () => async dispatch => {
    dispatch(cleaningActions.cleaningRequest());

    try {
        dispatch(cleaningActions.cleaningSuccess());
    } catch(error) {
        dispatch(cleaningActions.cleaningError(error));
    }

};

export default errorCleanOperation;