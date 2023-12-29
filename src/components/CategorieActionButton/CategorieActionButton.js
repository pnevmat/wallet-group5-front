import { useState } from 'react';
import CategorieActionModal from '../CategorieActionModal/CategorieActionModal';

import s from './CategorieActionButton.module.css';

export default function CategorieActionButton({ buttonText, actionType }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const spletedBtnText = buttonText.split(' ')[0];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={s.button} type="button" onClick={handleOpenModal}>
        {buttonText}
      </button>
      {isModalOpen && (
        <CategorieActionModal
          closeModal={closeModal}
          title={spletedBtnText}
          actionType={actionType}
        />
      )}
    </>
  );
}
