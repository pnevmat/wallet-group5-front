import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategoriesRequest } from '../../api/apiRequests';
import { getCategories } from '../../redux/reducers/categoryReducer/categoryReducer';
import selectors from '../../redux/selectors/authorisationSelectors';

import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

import s from './ModalEditBudget.module.css';

export default function CategoryForm({
  categorieCounter,
  categorie,
  categoryChange,
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

  const categories = useSelector(store => store.category);

  const handleChange = e => {
    categoryChange(e);
  };

  const categorieName = 'category' + categorieCounter;

  return (
    <Box className={s.categoryInput}>
      <FormControl fullWidth>
        <InputLabel
          className={s.categoryPlaceholder}
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          Выберите категорию
        </InputLabel>

        <NativeSelect
          fullWidth
          validators={['required']}
          errorMessages={['this field is required']}
          name={categorieName}
          onChange={handleChange}
          defaultValue={categorie}
          inputProps={{
            id: 'uncontrolled-native',
          }}
        >
          <option></option>
          {categories.length > 0 &&
            categories.map(el => {
              return (
                <>
                  <option>{el}</option>
                </>
              );
            })}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
