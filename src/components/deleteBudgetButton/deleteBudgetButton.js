import React, { useState } from 'react';
// import PropTypes from "prop-types"

import ModalDeleteBudget from '../ModalDeleteBudget/ModalDeleteBudget';

import styles from './DeleteBudgetButton.module.css';

const DeleteBudgetButton = () => {
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
      {isModalAddBudgetOpen && <ModalDeleteBudget closeModal={closeModal} />}
    </>
  );
};

export default DeleteBudgetButton;
