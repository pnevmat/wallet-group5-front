import React, { useState } from 'react';
// import PropTypes from "prop-types"

import ModalEditBudget from '../ModalEditBudget/ModalEditBudget';

import styles from './editBudgetButton.module.css';

const EditBudgetButton = () => {
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
      {isModalEditBudgetOpen && <ModalEditBudget closeModal={closeModal} />}
    </>
  );
};

export default EditBudgetButton;
