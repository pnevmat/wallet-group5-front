import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectors from '../../redux/selectors/authorisationSelectors';
import logoutOperation from '../../redux/operations/logoutOperation';
import s from './UserMenu.module.css';
import defaultAvatar from './default-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectors.getUserName);

  const onLogout = useCallback(() => {
    dispatch(logoutOperation());
  }, [dispatch]);

  return (
    <div className={s.container}>
      {/* <img src={defaultAvatar} alt="" width="32" className={s.avatar} /> */}
      <span className={s.name}> Welcome, {name}</span>
      <span className={s.verticalLine}></span>
      <button type="button" onClick={onLogout} className={s.btnLogout}>
        <span className={s.exitSvg}></span>
        Logout
      </button>
    </div>
  );
}
