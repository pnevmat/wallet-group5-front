import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

// import logoutOperation from '../../redux/operations/logoutOperation';

import s from './modalDeleteBudget.module.css';



const ModalDeleteBudget = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const openModal = () => {
    setmodalIsOpen(true);
  }

  const handleCloseModal = () => {
    closeModal(false)
  }

//   const logout = useCallback(() => {
//     dispatch(logoutOperation());
//   }, [dispatch]);

  return (
    <>
      <Modal
        className={s.modal}
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 className={s.modalExit}>Ты действительно хочеш удалить?</h2>
        <div className={s.modalBtn}>
        {/* onClick={logout} */}
          <button className={s.modalExitSucsess} >
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

export default ModalDeleteBudget;