import React from "react";
import UserMenu from "../UserMenu/UserMenu";
// import { connect } from 'react-redux';
import { useSelector } from "react-redux";
import selectors from "../../redux/selectors/authorisationSelectors";
import s from "./appBar.module.css";
import LoginForm from '../loginForm/loginForm';


export default function AppBar() {
  const isAuthenticated = useSelector(selectors.getIsAuthorisation);

  return (
    <header className={s.AppBar}>
      {isAuthenticated ? <LoginForm /> : <UserMenu /> }
    </header>
  );
}
