import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';

import s from './ModalDeleteBudget.module.css';



const ModalDeleteBudget = ({ closeModal, onSubmit }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const openModal = () => {
    setmodalIsOpen(true);
  }

  const handleCloseModal = () => {
    closeModal(false)
  }

  const handleSubmit = () => {
    const budget = {
      type: 'deleteBudget',
      // date: currentDate,
    }

    onSubmit(budget)
  }

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
          <button className={s.modalExitSucsess} onClick={handleSubmit}>
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