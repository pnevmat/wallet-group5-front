import React, { useState } from 'react';
// import PropTypes from "prop-types"

import ModalEditBudget from '../ModalEditBudget/ModalEditBudget';

import styles from './EditBudgetButton.module.css';

const EditBudgetButton = ({ onSubmit }) => {
  const [isModalEditBudgetOpen, setIsModalAddBudgetOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalAddBudgetOpen(true);
  };

  const closeModal = () => {
    setIsModalAddBudgetOpen(false);
  };

  return (
    <>
      <button className={styles.button} type="button" onClick={handleOpenModal}>
        Редактировать
      </button>
      {isModalEditBudgetOpen && (
        <ModalEditBudget onSubmit={onSubmit} closeModal={closeModal} />
      )}
    </>
  );
};

export default EditBudgetButton;
