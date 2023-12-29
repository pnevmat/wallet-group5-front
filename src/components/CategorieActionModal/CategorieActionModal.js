import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCategoryRequest,
  editCategoryRequest,
  deleteCategoryRequest,
} from '../../api/apiRequests';
import {
  addCategory,
  editCategory,
  deleteCategory,
} from '../../redux/reducers/categoryReducer/categoryReducer';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import RemoveIcon from '@mui/icons-material/Remove';
import { ValidatorForm } from 'react-material-ui-form-validator';
import CategoryForm from './CategoryForm';

import s from './CategorieActionModal.module.css';

export default function CategorieActionModal({
  closeModal,
  title,
  actionType,
}) {
  const [category, setCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState({});
  const [status, setStatus] = useState(true);

  const user = useSelector(store => store.userData.authorisationData);
  const categories = useSelector(store => store.category);
  console.log('Categories in Category form: ', categories);
  const dispatch = useDispatch();

  const formRef = useRef(null);

  useEffect(() => {
    function onKeyClick(e) {
      if (e.code === 'Escape') {
        closeModal();
      }
    }

    document.addEventListener('keydown', onKeyClick);
    return () => {
      document.removeEventListener('keydown', onKeyClick);
    };
  }, [closeModal]);

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    if (actionType === 'add') {
      const newCategorie = {
        email: user.email,
        category: { type: status ? 'cost' : 'income', name: category },
      };

      const data = await addCategoryRequest(newCategorie);
      if (data) {
        dispatch(addCategory(data.category));
      }
    }

    if (actionType === 'edit') {
      if (selectedCategory === '') return;

      const foundCategory = categories.find(
        cat => cat.name === selectedCategory,
      );
      const editedCategory = {
        email: user.email,
        category: { ...foundCategory, name: category },
      };

      const data = await editCategoryRequest(editedCategory);
      if (data) {
        dispatch(editCategory(data.category));
      }
    }

    if (actionType === 'delete') {
      if (selectedCategory === '') return;

      const foundCategory = categories.find(
        cat => cat.name === selectedCategory,
      );

      const data = await deleteCategoryRequest(user.email, foundCategory.id);
      if (data) {
        dispatch(deleteCategory(data.category));
      }
    }

    closeModal();
  };

  // Подключить тостифай вместо консоль лога
  return (
    <div className={s.overlay} onClick={e => handleCloseModal(e)}>
      <div className={s.modal}>
        <CloseIcon className={s.closeModalIcon} onClick={closeModal} />
        <ValidatorForm
          ref={formRef}
          onSubmit={e => handleSubmitForm(e)}
          onError={errors => console.log(errors)}
        >
          <h2 className={s.title}>{`${title} категорию`}</h2>
          <div className={s.switchContainer}>
            <p className={status ? s.unactive : s.activeIncome}>Доход</p>
            <Switch
              checkedIcon={<RemoveIcon className={s.removeIcon} />}
              icon={<AddIcon className={s.addIcon} />}
              checked={status}
              onChange={() => setStatus(!status)}
            />
            <p className={status ? s.activeInvoice : s.unactive}>Расход</p>
          </div>
          <div className={s.categoryContainer}>
            <CategoryForm
              categories={categories}
              category={category}
              iputChange={setCategory}
              selectChange={setSelectedCategory}
              actionType={actionType}
              status={status}
            />
          </div>
          <button className={s.submitButton} type="submit">
            {title}
          </button>
          <button className={s.closeButton} onClick={closeModal} type="button">
            Отмена
          </button>
        </ValidatorForm>
      </div>
    </div>
  );
}
