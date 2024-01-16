import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesRequest } from '../../api/apiRequests';
import { getCategories } from '../../redux/reducers/categoryReducer/categoryReducer';
import selectors from '../../redux/selectors/authorisationSelectors';

import s from './ModalAddTransaction.module.css';

export default function CategoryForm({
  categoryChange,
  blur,
  validCategory,
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

  const categories = useSelector(store => store.category);

  const handleChange = e => {
    categoryChange(e.target.value);
    blur(e);
  };

  const filteredCategories = categories.filter(categorie =>
    status ? categorie.type === 'cost' : categorie.type === 'income',
  );

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
          name="category"
          onChange={handleChange}
          onBlur={e => blur(e)}
          defaultValue=""
          inputProps={{
            id: 'uncontrolled-native',
          }}
        >
          <option>Выберите категорию</option>
          {categories.length > 0 &&
            filteredCategories.map(el => {
              return <option key={el.id}>{el.name}</option>;
            })}
        </NativeSelect>
        {validCategory.category !== '' && (
          <span className={s.selectValidMessage}>{validCategory.category}</span>
        )}
      </FormControl>
    </Box>
  );
}
