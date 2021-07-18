<<<<<<< HEAD
// import { useDispatch, useSelector } from 'react-redux';
// // import { Component } from "react";
// // import { createPortal } from "react-dom";
// // const modalRoot = document.querySelector("#modal-root");
// import s from './modalLogout.module.css';
// import modalLogoutAction from '../../redux/actions/isModalLogoutOpenAction';
// import modalLogoutSelector from '../../redux/selectors/isModalLogoutOpenSelector';
// import logoutOperation from '../../redux/operations/logoutOperation';
// import ReactModal from 'react-modal';


// const ModalLogout = () => {
//   const dispatch = useDispatch();
//   const isModalOpen = useSelector(state => modalLogoutSelector(state));
//   const onToggleModal = dispatch(modalLogoutAction());

//   const logout = () => {
//     dispatch(logoutOperation());
//     onToggleModal();
//     console.log('you logout');
//   };

//   return (
//     <>
//       <ReactModal
//         className={s.modal}
//         isOpen={isModalOpen}
//         onRequestClose={onToggleModal}
//         contentLabel="Example Modal"
//         ariaHideApp={false}
//       >
//         <h2 className={s.modalExit}>Do you realy want to exit?</h2>
//         <div className={s.modalBtn}>
//           <button className={s.modalExitSucsess} onClick={logout}>
//             Yes
//           </button>
//           <button className={s.modalExitCancel} onClick={onToggleModal}>
//             No, stay here
//           </button>
//         </div>
//       </ReactModal>
//     </>
//   );
// };
// export default ModalLogout;
=======
import { useDispatch, useSelector } from 'react-redux';
// import { Component } from "react";
// import { createPortal } from "react-dom";
// const modalRoot = document.querySelector("#modal-root");
import s from './modalLogout.module.css';
import modalLogoutAction from '../../redux/actions/isModalLogoutOpenAction';
import modalLogoutSelector from '../../redux/selectors/isModalLogoutOpenSelector';
import logoutOperation from '../../redux/operations/logoutOperation';
// import ReactModal from 'react-modal';


const ModalLogout = () => {
  // const dispatch = useDispatch();
  // const isModalOpen = useSelector(state => modalLogoutSelector(state));
  // const onToggleModal = () => dispatch(modalLogoutAction());

  // const logout = () => {
  //   dispatch(logoutOperation());
  //   onToggleModal();
  //   console.log('you logout');
  // };

  return (
    <>
      {/* <ReactModal
        className={s.modal}
        isOpen={isModalOpen}
        onRequestClose={onToggleModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 className={s.modalExit}>Do you realy want to exit?</h2>
        <div className={s.modalBtn}>
          <button className={s.modalExitSucsess} onClick={logout}>
            Yes
          </button>
          <button className={s.modalExitCancel} onClick={onToggleModal}>
            No, stay here
          </button>
        </div>
      </ReactModal> */}
    </>
  );
};
export default ModalLogout;
>>>>>>> e4d826ba8f1772cbd2e606006cee00db52ede0fb


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
