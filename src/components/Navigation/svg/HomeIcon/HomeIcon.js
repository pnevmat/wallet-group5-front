import React from 'react';
import s from './HomeIcon.module.css';
const HomeIcon = () => {
  return (
    <svg
      viewBox="0 0 38 38"
      className={s.navIcons}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0a6 6 0 00-6 6v26a6 6 0 006 6h26a6 6 0 006-6V6a6 6 0 00-6-6H6zm9.933 21.36v8.195H9.1V18.627H5L18.667 6.333l13.666 12.294h-4.1v10.928H21.4V21.36h-5.467z"
        fill="#6E78E8"
      />
    </svg>
  );
};
export default HomeIcon;
