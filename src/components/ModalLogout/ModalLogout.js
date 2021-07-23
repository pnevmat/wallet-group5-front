import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
// import { Component } from "react";
// import { createPortal } from "react-dom";
// const modalRoot = document.querySelector("#modal-root");
import s from './modalLogout.module.css';
import modalLogoutAction from '../../redux/actions/isModalLogoutOpenAction';
import modalLogoutSelector from '../../redux/selectors/isModalLogoutOpenSelector';
import logoutOperation from '../../redux/operations/logoutOperation';
import Modal from 'react-modal';
import operation from '../../redux/operations/logoutOperation';
import { connect } from "react-redux";

const ModalLogout = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
    const onToggleModal = dispatch(modalLogoutAction());
  }
  // const isModalOpen = useSelector((state) => modalLogoutSelector(state));
  // const onToggleModal = dispatch(modalLogoutAction());

  const logout = useCallback(() => {
    dispatch(logoutOperation());
  }, [dispatch]);

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      this.props.onToggleModal();
    }
  };

  return (
    <>
      <Modal
        className={s.modal}
        isOpen={openModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 className={s.modalExit}>Ты дествительно хочеш выйти?</h2>
        <div className={s.modalBtn}>
          <button className={s.modalExitSucsess} onClick={logout}>
            Да
          </button>
          <button className={s.modalExitCancel} onClick={closeModal}>
            Нет
          </button>
        </div>
      </Modal>
    </>
  );
};

const mapDispatchToProps = {
  logoutOperation: operation.logoutOperation,
}

export default connect(null, mapDispatchToProps)(ModalLogout);


/*
  //закриття по Escape
  handleKeydown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  //закриття по BackdropClick
  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
*/
