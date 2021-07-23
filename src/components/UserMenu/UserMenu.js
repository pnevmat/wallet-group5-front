import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelector from '../../redux/selectors/authorisationSelectors';
// import logoutOperation from '../../redux/operations/logoutOperation';
import s from './UserMenu.module.css';
import modalLogoutAction from '../../redux/actions/isModalLogoutOpenAction';
import defaultAvatar from './default-avatar.png';
import ModalLogout from "../ModalLogout/ModalLogout";

export default function UserMenu(props) {
  // const dispatch = useDispatch();

  const name = useSelector(authSelector.getUserName);
  const avatar = useSelector(authSelector.getUserAvatar);

  const [isModalLogoutOpenActions, setIsModalLogoutOpenActions] = useState(false);

  const handleOpenModal = () => {
    setIsModalLogoutOpenActions(true);
  };


  // const onLogout = useCallback(() => {
  //   dispatch(logoutOperation());
  // }, [dispatch]);

  return (
    <div className={s.userMenuContainer}>

      <div className={s.logo_container}>
        <img src="/Group.svg" alt="кошелек" className={s.logo} />
        <h1 className={s.title}>Wallet</h1>
      </div>
      <div className={s.containerLogout}>
        <span className={s.name}>

          {/* <img src={avatar ? avatar : defaultAvatar} alt="" width="32" className={s.avatar} /> */}
          {name}
        </span>
        <span className={s.verticalLine}></span>

        <button className={s.btnLogout} type="button" onClick={handleOpenModal}>
          <span className={s.exitSvg}></span>
          <span className={s.logoutTitle}>Вийти</span>
        </button>
        {isModalLogoutOpenActions && <ModalLogout />}
      </div>
    </div>
  );
}
