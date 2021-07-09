import React from 'react';

const HomePage = () => (
  <div className={s.registrationLoginPage}>
    <span className={s.homePageText}>Finance App</span>
    <svg className={s.homePage}>
      <use
        className={s.homePageSvgFrame}
        href="../../sprite/symbol-defs.svg#icon-Ellipse-1Frame"
      ></use>
      <use
        className={s.homePageSvgElipse1}
        href="../../sprite/symbol-defs.svg#icon-Ellipse-1Elipse-1"
      ></use>
      <use
        className={s.homePageSvgRectangle}
        href="../../sprite/symbol-defs.svg#icon-Ellipse-1Rectangle-3"
      ></use>
    </svg>
  </div>
);

export default HomePage;
