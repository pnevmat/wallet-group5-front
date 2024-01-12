import React from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';

import s from './ModalDeleteBudget.module.css';

const ModalDeleteBudget = ({ onSubmit, closeModal, isOpen }) => {
  const { budget } = useSelector(store => store.budget);

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const onClickClose = () => {
    closeModal();
  };

  const handleSubmit = () => {
    const budgetToDelete = {
      type: 'deleteBudget',
      id: budget.id,
    };

    if (budget.id) {
      onSubmit(budgetToDelete);
      onClickClose();
    }
  };

  return (
    <Modal
      className={s.modal}
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <h2 className={s.modalExit}>
        Вы действительно хотите удалить текущий бюджет?
      </h2>
      <div className={s.modalBtn}>
        <button className={s.modalExitSucsess} onClick={() => handleSubmit()}>
          Да
        </button>
        <button className={s.modalExitCancel} onClick={onClickClose}>
          Нет
        </button>
      </div>
    </Modal>
  );
};

export default ModalDeleteBudget;
