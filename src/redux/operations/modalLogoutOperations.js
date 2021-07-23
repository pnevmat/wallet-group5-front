import isModalLogoutOpen from '../actions/isModalLogoutOpenAction';
import isModalLogoutClose from '../actions/isModalLogoutOpenAction';

const SetIsModalLogoutOpen = () => dispatch => {
    dispatch(isModalLogoutOpen());
};

const SetIsModalLogoutClose = () => dispatch => {
    dispatch(isModalLogoutClose());
};

export default { SetIsModalLogoutOpen, SetIsModalLogoutClose }