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
  iputChange,
  selectChange,
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
  console.log('Filtered categories in Category form: ', filteredCategories);
  const handleInputChange = e => {
    iputChange(e.target.value);
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
          <TextField
            className={s.categoryPlaceholder}
            autoComplete={'off'}
            label="Новая категория"
            margin="dense"
            type="textarea"
            name="category"
            value={category}
            onChange={e => handleInputChange(e)}
          />
        ) : actionType === 'edit' ? (
          <div className={s.editContainer}>
            <NativeSelect
              fullWidth
              validators={['required']}
              // errorMessages={['this field is required']}
              name="category"
              onChange={handleSelectChange}
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
            <TextField
              className={s.categoryPlaceholder}
              autoComplete={'off'}
              label="Новая категория"
              margin="dense"
              type="textarea"
              name="category"
              value={category}
              onChange={e => handleInputChange(e)}
            />
          </div>
        ) : (
          <NativeSelect
            fullWidth
            validators={['required']}
            // errorMessages={['this field is required']}
            name="category"
            onChange={handleSelectChange}
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
        )}
      </FormControl>
    </Box>
  );
}
