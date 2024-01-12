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
  categoryCounter,
  category,
  categoryChange,
}) {
  const categories = useSelector(store => store.category);
  const costCategories = categories.filter(
    cat => cat.type === 'cost' && cat.name !== category,
  );

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

  const handleChange = e => {
    categoryChange(e);
  };

  const categorieName = 'category' + categoryCounter;

  return (
    <Box className={s.categoryInput}>
      <FormControl fullWidth>
        {!category && (
          <InputLabel
            className={s.categoryPlaceholder}
            variant="standard"
            htmlFor="uncontrolled-native"
          >
            Выберите категорию
          </InputLabel>
        )}

        <NativeSelect
          fullWidth
          validators={['required']}
          errorMessages={['this field is required']}
          name={categorieName}
          onChange={handleChange}
          defaultValue={category}
          inputProps={{
            id: 'uncontrolled-native',
          }}
        >
          <option>{category}</option>
          {costCategories.length > 0 &&
            costCategories.map(el => <option>{el.name}</option>)}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
