import React, { Component } from 'react';
import operation from '../../redux/operations/transactionOperations'
import AddIcon from '@material-ui/icons/Add';
import { createPortal } from 'react-dom';
import s from './ModalAddTransaction.module.css';
import CloseIcon from '@material-ui/icons/Close';
import Switch from '@material-ui/core/Switch';
import RemoveIcon from '@material-ui/icons/Remove';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import CategoryForm from './CategoryForm';
import { connect } from "react-redux";
import moment from 'moment';
import { validate } from 'indicative/validator'

const rules = {
  category: 'required|alpha',
  transactionValue: 'required|email',
  currentDate: 'required|min:4',
}

const messages = {
  required: (field) => `${field} is required`,
  ' category': 'This field is required',
  'transactionValue': 'This field is required',
  'currentDate': 'This field is required',
}


// import PropTypes from "prop-types";

// const modalRef = document.getElementById("modal-root");

class ModalAddTransaction extends Component {
  state = {
    status: true,
    currentDate: moment().format('YYYY-MM-DD'),
    transactionValue: '', 

  };


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

  onChangeStatus = () => {
    this.setState({ status: !this.state.status });
  };

  changeClass = (state, class1, class2) => {
    const currentlass = state ? class1 : class2;
    return currentlass;
  };
  handleTransactionInfo = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { currentDate, transactionValue, category, comments, status  } = this.state;

    const newTransaction = {
      "date": `${currentDate} ${moment().format('HH:mm')}`,
      "type": status ? "cost" : "income",
     "amount":  transactionValue,
    "category":  category,
    "comments":comments,
    
 
   };
    this.onClickClose();
    this.props.addTransaction(newTransaction)
  };
  setCategory =( value) => {
    this.setState({ category: value });
  };

  render() {
    const { status, currentDate, transactionValue, comments } = this.state;

    return (
      <div className={s.overlay} onClick={this.handleCloseModal}>
        <div className={s.modal}>
          <CloseIcon className={s.closeModalIcon} onClick={this.onClickClose} />
          <form type="submit">
            <h2 className={s.title}>Добавить транзакцию</h2>
            <div className={s.switchContainer}>
              <p
                className={this.changeClass(status, s.unactive, s.activeIncome)}
              >
                Доход
              </p>
              <Switch
                checkedIcon={<RemoveIcon className={s.removeIcon} />}
                icon={<AddIcon className={s.addIcon} />}
                checked={status}
                onChange={this.onChangeStatus}
              />
              <p
                className={this.changeClass(
                  status,
                  s.activeInvoice,
                  s.unactive,
                )}
              >
                Расход
              </p>
            </div>
            {status && (
              <div className={s.categoryContainer}>
                <CategoryForm categoryChange={this.setCategory} />
              </div>
            )}

            <div className={s.textField}>
              <TextField
                autoComplete={'off'}
                label="0.00"
                margin="dense"
                name="transactionValue"
                value={transactionValue}
                onChange={this.handleTransactionInfo}
              />
              <TextField
                id="date"
                label="Введите дату"
                type="date"
                name="currentDate"
                value={currentDate}
                defaultValue={`${currentDate}`}
                className={s.textField}


                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleTransactionInfo}
              />
            </div>
            <div className={s.textFieldcomments}>
              <TextField
                className={s.categoryPlaceholder}
                autoComplete={'off'}
                label="Комментарий"
                margin="dense"
                type="textarea"
                name="comments"
                value={comments}
                onChange={this.handleTransactionInfo}
              />
              <div />
            </div>
            <button
              className={s.submitButton}
              onClick={this.handleSubmitForm}
              type="submit"
            >
              Добавить
            </button>
            <button
              className={s.closeButton}
              onClick={this.onClickClose}
              type="button"
            >
              Отмена
            </button>
          </form>
        </div>
      </div>
      //   modalRef
    );
  }
}


const mapDispatchToProps={
  addTransaction: operation.addTransaction,
}





export default  connect(null, mapDispatchToProps)(ModalAddTransaction);
