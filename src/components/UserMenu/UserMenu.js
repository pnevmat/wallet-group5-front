import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelector from '../../redux/selectors/authorisationSelectors';
import logoutOperation from '../../redux/operations/logoutOperation';
import s from './UserMenu.module.css';
import defaultAvatar from './default-avatar.png';
// import ModalLogout from "../ModalLogout/ModalLogout";

export default function UserMenu(props) {
  const dispatch = useDispatch();

  const name = useSelector(authSelector.getUserName);
  const avatar = useSelector(authSelector.getUserAvatar);
  
  const onLogout = useCallback(() => {
    dispatch(logoutOperation());
  }, [dispatch]);

  return (
    <div className={s.userMenuContainer}>
      <div className={s.logo_container}>
        <img src="/Group.svg" alt="кошелек" className={s.logo} />
        <h1 className={s.title}>Wallet</h1>
      </div>
      <span className={s.name}>
        Welcome,
        <img src={avatar ? avatar : defaultAvatar} alt="" width="32" className={s.avatar} />
        {name}
      </span>
      <span className={s.verticalLine}></span>

      <button className={s.btnLogout} type="button" onClick={onLogout}>
        <span className={s.exitSvg}></span>
        <span className={s.logoutTitle}>Logout</span>
      </button>
      {/* <ModalLogout /> */}
    </div>
  );
}
