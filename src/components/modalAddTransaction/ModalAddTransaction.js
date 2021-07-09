import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RemoveIcon from '@material-ui/icons/Remove';
import moment from 'moment';
import CategoryForm from './CategoryForm';
import { validate } from 'indicative/validator'
import s from './ModalAddTransaction.module.css';

const schema = {
  username: 'required|alpha',
  password: 'required|min:4|max:40',
}

// import PropTypes from "prop-types";

// const modalRef = document.getElementById("modal-root");

class ModalAddTransaction extends Component {
  state = {
    status: true,
    currentDate: moment().format('YYYY-MM-DD'),
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

  handleSubmitForm = e => {
    e.preventDefault();
  };

  render() {
    const { status, currentDate } = this.state;
    console.log(this.currentDate);
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
                <CategoryForm />
              </div>
            )}

            <div className={s.textField}>
              <TextField autoComplete={'off'} label="0.00" margin="dense" />
              <TextField
                id="date"
                label="Введите дату"
                type="date"
                defaultValue={`${currentDate}`}
                className={s.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className={s.textFieldcomments}>
              <TextField
                className={s.categoryPlaceholder}
                autoComplete={'off'}
                label="Комментарий"
                margin="dense"
                type="textarea"
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

export default ModalAddTransaction;
