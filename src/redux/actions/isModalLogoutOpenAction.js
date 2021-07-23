import { createAction } from '@reduxjs/toolkit';

const isModalLogoutOpen = createAction('modal/modalLogoutOpen');
const isModalLogoutClose = createAction('modal/modalLogoutClose');

export default { isModalLogoutOpen, isModalLogoutClose };