import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { createPortal } from 'react-dom';
import s from './ModalAddTransaction.module.css';
import CloseIcon from '@material-ui/icons/Close';
import Switch from '@material-ui/core/Switch';
import RemoveIcon from '@material-ui/icons/Remove';
// import PropTypes from "prop-types";

// const modalRef = document.getElementById("modal-root");

class ModalAddTransaction extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyClick);
  }

  handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  onKeyClick = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  onClickClose = () => {
    this.props.closeModal();
  };
  onClickButton=()=>{
    
  }


  render() {
    return (
      <div className={s.overlay} onClick={this.handleCloseModal}>
        <div className={s.modal}>
          <CloseIcon className={s.closeModalIcon} onClick={this.onClickClose} />
          <form type="submit">
            <h2 className={s.title}>Добавить транзакцию</h2>
            <div className={s.switchContainer}>
            <p className={s.description}>Доход</p>
            <Switch
              checkedIcon={<RemoveIcon className={s.removeIcon}/>}
              icon={<AddIcon className={s.addIcon}/>}
             checked
            //  onClick={(e)=>{
            //    this.checked=!e.target.checked
            //   console.log(e.target.value)}}
            //   className={s.disabled}
            />
            <p className={s.description1}>Расход</p>
            </div>
          </form>
        </div>
      </div>
      //   modalRef
    );
  }
}

export default ModalAddTransaction;
