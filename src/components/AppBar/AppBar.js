import React from "react";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
// import { connect } from 'react-redux';
import { useSelector } from "react-redux";
import selectors from "../../redux/selectors/authorisationSelectors/authorisationSelectors";
import s from "./appBar.module.css";

export default function AppBar() {
  const isAuthenticated = useSelector(selectors.authorisation);

  return (
    <header className={s.AppBar}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
