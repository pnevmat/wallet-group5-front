import React from "react";
import { useSelector } from "react-redux";

import selectors from "../../redux/selectors/authorisationSelectors";

import UserMenu from "../UserMenu/UserMenu";
import LoginForm from '../loginForm/loginForm';

import s from "./appBar.module.css";


export default function AppBar() {
  const isAuthenticated = useSelector(selectors.getIsAuthorisation);

  return (
    <header className={s.AppBar}>
      {isAuthenticated ? <LoginForm /> : <UserMenu /> }
    </header>
  );
}
