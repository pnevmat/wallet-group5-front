import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { logout } from '../../redux/reducers/authorisationReducers/authorisationReducer';
import { sessionLogout } from '../../redux/reducers/authorisationReducers/authReducer';
import Modal from 'react-modal';

import s from './ModalLogout.module.css';

const ModalLogout = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    closeModal(false);
  };

  const handleLogout = useCallback(() => {
    dispatch(logout());
    dispatch(sessionLogout());
  }, [dispatch]);

  return (
    <>
      <Modal
        className={s.modal}
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Modal Logout"
        ariaHideApp={false}
      >
        <h2 className={s.modalExit}>Вы действительно хотите выйти?</h2>
        <div className={s.modalBtn}>
          <button className={s.modalExitSucsess} onClick={handleLogout}>
            Да
          </button>
          <button className={s.modalExitCancel} onClick={handleCloseModal}>
            Нет
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalLogout;
