import React, {  useState  } from "react";
import AddIcon from '@material-ui/icons/Add';
// import PropTypes from "prop-types"
import s from './AddTransactionButton.module.css'
import ModalAddTransaction from '../modalAddTransaction/ModalAddTransaction'


const AddButton =()=>{
   
  const [isModalAddTransaktionOpen, setIsModalAddTransaktionOpen]=useState(false)

 const handleOpenModal=()=>{
    setIsModalAddTransaktionOpen(true)
  }

  const closeModal=()=>{
    setIsModalAddTransaktionOpen(false)
  }
   
  return(
   <div className={s.btnContainer}>
      <button className={s.addBtn} type="button" onClick={handleOpenModal} >
        <AddIcon />
      </button>
      { isModalAddTransaktionOpen && <ModalAddTransaction closeModal={closeModal}/>}
    </div>
   
  )
  
}

export default  AddButton