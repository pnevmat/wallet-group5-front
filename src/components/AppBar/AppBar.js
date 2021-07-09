import React from "react";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import authorisation from "../../redux/selectors/authorisationSelectors/authorisationSelectors";
import s from "./appBar.module.css";

export default function AppBar() {
  const isAuthenticated = useSelector(authorisation);

  return (
    <header className={s.AppBar}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
