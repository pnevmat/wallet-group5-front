import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useCallback } from 'react';
import s from './modalLogout.module.css';
import logoutOperation from '../../redux/operations/logoutOperation';
import Modal from 'react-modal';
import operation from '../../redux/operations/logoutOperation';
import { connect } from "react-redux";



const ModalLogout = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    closeModal(false)
  }

  const logout = useCallback(() => {
    dispatch(logoutOperation());
  }, [dispatch]);



  return (
    <>
      <Modal
        className={s.modal}
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 className={s.modalExit}>Ты действительно хочеш выйти?</h2>
        <div className={s.modalBtn}>
          <button className={s.modalExitSucsess} onClick={logout}>
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

const mapDispatchToProps = {
  logoutOperation: operation.logoutOperation,

}

export default connect(null, mapDispatchToProps)(ModalLogout);



