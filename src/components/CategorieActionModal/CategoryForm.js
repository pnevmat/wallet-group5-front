import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import NativeSelect from '@mui/material/NativeSelect';
import { getCategoriesRequest } from '../../api/apiRequests';
import { getCategories } from '../../redux/reducers/categoryReducer/categoryReducer';
import selectors from '../../redux/selectors/authorisationSelectors';

import s from './CategorieActionModal.module.css';

export default function CategoryForm({
  categories,
  category,
  validCategory,
  iputChange,
  selectChange,
  blur,
  actionType,
  status,
}) {
  const dispatch = useDispatch();
  const token = useSelector(selectors.getUserToken);

  useEffect(() => {
    const handleGetCategories = async () => {
      const {
        user: { categories },
      } = await getCategoriesRequest(token);

      if (categories) {
        dispatch(getCategories(categories));
      }
    };
    handleGetCategories();
  }, [dispatch]);

  const filteredCategories = categories.filter(categorie =>
    status ? categorie.type === 'cost' : categorie.type === 'income',
  );

  const handleInputChange = e => {
    iputChange(e.target.value);
    blur(e);
  };

  const handleSelectChange = e => {
    const category = e.target.value;

    selectChange(category);
    iputChange(category);
  };

  return (
    <Box className={s.categoryInput}>
      <FormControl fullWidth>
        {actionType === 'add' ? (
          <>
            <TextField
              className={s.categoryPlaceholder}
              autoComplete={'off'}
              label="Новая категория"
              margin="dense"
              type="textarea"
              name="category"
              value={category}
              onChange={e => handleInputChange(e)}
              onBlur={e => blur(e)}
            />
            {validCategory.input !== '' && (
              <span className={s.validationMessage}>{validCategory.input}</span>
            )}
          </>
        ) : actionType === 'edit' ? (
          <div className={s.editContainer}>
            <NativeSelect
              fullWidth
              validators={['required']}
              name="select"
              onChange={handleSelectChange}
              onBlur={e => blur(e)}
              defaultValue="Выберите категорию"
              inputProps={{
                id: 'uncontrolled-native',
              }}
            >
              <option>Выберите категорию</option>
              {filteredCategories.length > 0 &&
                filteredCategories.map(el => {
                  return <option key={el.id}>{el.name}</option>;
                })}
            </NativeSelect>
            {validCategory.select !== '' && (
              <span className={s.selectValidMessage}>
                {validCategory.select}
              </span>
            )}
            <TextField
              className={s.categoryPlaceholder}
              autoComplete={'off'}
              label="Новая категория"
              margin="dense"
              type="textarea"
              name="category"
              value={category}
              onChange={e => handleInputChange(e)}
              onBlur={e => blur(e)}
            />
            {validCategory.input !== '' && (
              <span className={s.validationMessage}>{validCategory.input}</span>
            )}
          </div>
        ) : (
          <>
            <NativeSelect
              fullWidth
              validators={['required']}
              name="select"
              onChange={handleSelectChange}
              onBlur={e => blur(e)}
              defaultValue="Выберите категорию"
              inputProps={{
                id: 'uncontrolled-native',
              }}
            >
              <option>Выберите категорию</option>
              {filteredCategories.length > 0 &&
                filteredCategories.map(el => {
                  return <option key={el.id}>{el.name}</option>;
                })}
            </NativeSelect>
            {validCategory.select !== '' && (
              <span className={s.selectValidMessage} style={{ top: '105%' }}>
                {validCategory.select}
              </span>
            )}
          </>
        )}
      </FormControl>
    </Box>
  );
}
