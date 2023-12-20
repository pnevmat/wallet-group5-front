import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import operation from '../../redux/operations/categoryOperations.js';
import { getCategories } from '../../redux/selectors/categorySelectors/categorySelectors';
import selectors from '../../redux/selectors/authorisationSelectors';

import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

import s from './ModalEditBudget.module.css';


export default function CategoryForm({ categorieCounter, categorie, categoryChange }) {
  const dispatch = useDispatch();
  const token = useSelector(selectors.getUserToken);
  

  useEffect(() => {
     dispatch(operation.fetchCategory(token));
  }, [dispatch]);

  
  const categories = useSelector(getCategories);

  const handleChange = e => {
    categoryChange(e);
  };

  const categorieName = "category" + categorieCounter;

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
          validators={['required', ]}
          errorMessages={[
           'this field is required',
         ]}
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
              return <> 
              <option>{el}</option></>
           
            })}
          
        </NativeSelect>
      </FormControl>
    </Box>
  );
}