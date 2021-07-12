import React from 'react';

import s from './homepage.module.css';

const HomeComponent = () => (
  <div className={s.registrationLoginPage}>
    <span className={s.homePageText}>Finance App</span>
    {/* <svg className={s.homePage}>
      <use
        className={s.homePageSvgFrame}
        href="../../sprite/symbol-defs.svg#icon-Ellipse-1"
      ></use>
      <use
        className={s.homePageSvgElipse1}
        href="../../sprite/symbol-defs.svg#icon-Ellipse-2"
      ></use>
      <use
        className={s.homePageSvgRectangle}
        href="../../sprite/symbol-defs.svg#icon-Rectangle-3"
      ></use>
    </svg> */}
  </div>
);

export default HomeComponent;
