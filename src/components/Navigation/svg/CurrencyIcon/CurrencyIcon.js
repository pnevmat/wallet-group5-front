import React from 'react';
import s from './CurrencyIcon.module.css';
const CurrencyIcon = () => {
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
        d="M6 0a6 6 0 00-6 6v26a6 6 0 006 6h26a6 6 0 006-6V6a6 6 0 00-6-6H6zm9.752 15.599c0 1.182.909 1.94 3.733 2.675 2.825.734 5.848 1.941 5.848 5.475 0 2.55-1.928 3.957-4.355 4.417v2.675h-3.733v-2.7c-2.389-.51-4.43-2.04-4.578-4.765h2.737c.137 1.468 1.145 2.612 3.708 2.612 2.75 0 3.36-1.368 3.36-2.227 0-1.157-.623-2.252-3.733-2.998-3.472-.834-5.849-2.265-5.849-5.14 0-2.4 1.942-3.968 4.355-4.491V8.444h3.733v2.725c2.6.635 3.907 2.6 3.994 4.741h-2.75c-.074-1.555-.895-2.613-3.11-2.613-2.103 0-3.36.946-3.36 2.302z"
        fill="#6E78E8"
      />
    </svg>
  );
};
export default CurrencyIcon;
