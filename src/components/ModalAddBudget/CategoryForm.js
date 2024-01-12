import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategoriesRequest } from '../../api/apiRequests';
import { getCategories } from '../../redux/reducers/categoryReducer/categoryReducer';
import selectors from '../../redux/selectors/authorisationSelectors';

import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

import s from './ModalAddBudget.module.css';

export default function CategoryForm({ categorieCounter, categoryChange }) {
  const categories = useSelector(store => store.category);
  const costCategories = categories.filter(
    category => category.type === 'cost',
  );
  const token = useSelector(selectors.getUserToken);

  const dispatch = useDispatch();

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
  }, [dispatch, token]);

  const handleChange = e => {
    categoryChange(e, `field${categorieCounter}`);
  };

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
          name={'category' + categorieCounter}
          onChange={handleChange}
          defaultValue=""
          inputProps={{
            id: 'uncontrolled-native',
          }}
        >
          <option></option>
          {costCategories.length > 0 &&
            costCategories.map(el => <option>{el.name}</option>)}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
