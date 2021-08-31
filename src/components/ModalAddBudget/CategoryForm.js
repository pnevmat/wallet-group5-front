import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import operation from '../../redux/operations/categoryOperations.js';
import { getCategories } from '../../redux/selectors/categorySelectors/categorySelectors';
import selectors from '../../redux/selectors/authorisationSelectors';

import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';

import s from './modalAddBudget.module.css';


export default function CategoryForm({ categoryChange }) {
  const dispatch = useDispatch();
  const token =useSelector(selectors.getUserToken);
  

  useEffect(() => {
     dispatch(operation.fetchCategory(token));
  }, [dispatch]);

  
  const categories = useSelector(getCategories);

  const handleChange = e => {
    categoryChange(e.target.value);
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
         validators={['required', ]}
         errorMessages={[
           'this field is required',
         
         ]}
          name="category"
          onChange={handleChange}
            defaultValue=''
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
