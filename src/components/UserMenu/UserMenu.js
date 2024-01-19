import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/selectors/authorisationSelectors';
import s from './UserMenu.module.css';
import defaultAvatar from './default-avatar.png';
import ModalLogout from '../ModalLogout/ModalLogout';

export default function UserMenu() {
  const name = useSelector(authSelector.getUserName);
  const avatar = useSelector(authSelector.getUserAvatar);

  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={s.userMenuContainer}>
      <div className={s.logo_container}>
        <img src="/Group.svg" alt="кошелек" className={s.logo} />
        <h1 className={s.title}>Wallet</h1>
      </div>
      <div className={s.containerLogout}>
        <span className={s.name}>
          {name}
          <img
            src={avatar ? avatar : defaultAvatar}
            alt=""
            width="32"
            className={s.avatar}
          />
        </span>
        <span className={s.verticalLine}></span>

        <button className={s.btnLogout} type="button" onClick={handleOpenModal}>
          <span className={s.exitSvg}></span>
          <span className={s.logoutTitle}>Вийти</span>
        </button>
        {modalIsOpen && (
          <ModalLogout isOpen={modalIsOpen} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
}
