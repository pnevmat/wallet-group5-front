import * as React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import s from './ModalAddTransaction.module.css';

export default function CategoryForm() {
  return (
    <Box className={s.categoryInput}>
      <FormControl fullWidth>
        <InputLabel className={s.categoryPlaceholder} variant="standard" htmlFor="uncontrolled-native">
         Выберите категорию
        </InputLabel>
        <NativeSelect
        //   defaultValue={''}
          inputProps={{
            name: 'Категория',
            id: 'uncontrolled-native',
          }}
        >
          <option></option>
          <option>Еда</option>
          <option >Дети</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

