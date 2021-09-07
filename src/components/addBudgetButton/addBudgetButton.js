import React, {  useState  } from "react";
// import PropTypes from "prop-types"

import ModalAddBudget from '../ModalAddBudget/modalAddBudget';

import styles from './AddBudgetButton.module.css';


const AddBudgetButton =()=>{
   
  const [isModalAddBudgetOpen, setIsModalAddBudgetOpen] = useState(false);

 const handleOpenModal=()=>{
    setIsModalAddBudgetOpen(true)
  };

  const closeModal=()=>{
    setIsModalAddBudgetOpen(false)
  };
   
  return(
   <>
      <button className={styles.button}  type="button" onClick={handleOpenModal} >
        Создать бюджет
      </button>
      { isModalAddBudgetOpen && <ModalAddBudget closeModal={closeModal}/>}
    </>
   
  )
  
}

export default  AddBudgetButton;