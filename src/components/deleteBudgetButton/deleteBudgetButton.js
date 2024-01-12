import React, { useState } from 'react';

import ModalDeleteBudget from '../ModalDeleteBudget/ModalDeleteBudget';

import styles from './DeleteBudgetButton.module.css';

const DeleteBudgetButton = ({ onSubmit }) => {
  const [isModalAddBudgetOpen, setIsModalAddBudgetOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalAddBudgetOpen(true);
  };

  const closeModal = () => {
    setIsModalAddBudgetOpen(false);
  };

  return (
    <>
      <button className={styles.button} type="button" onClick={handleOpenModal}>
        Удалить
      </button>
      {isModalAddBudgetOpen && (
        <ModalDeleteBudget
          onSubmit={onSubmit}
          closeModal={closeModal}
          isOpen={isModalAddBudgetOpen}
        />
      )}
    </>
  );
};

export default DeleteBudgetButton;
