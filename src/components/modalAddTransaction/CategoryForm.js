import  React, {useEffect} from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import s from './ModalAddTransaction.module.css';
import {useDispatch,   useSelector } from "react-redux";
import {getCategories} from '../../redux/selectors/categorySelectors/categorySelectors'
import operation from "../../redux/operations/categoryOperations.js";


export default function CategoryForm({categoryChange}) {
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operation.fetchCategory());
  }, [dispatch]);

  const categories= useSelector(getCategories)
 
 console.log(categories)
 const handleChange = (e) => {
  categoryChange(e.target.value)
};




  return (
    <Box className={s.categoryInput}>
      <FormControl fullWidth  >
        <InputLabel className={s.categoryPlaceholder} variant="standard" htmlFor="uncontrolled-native" >
         Выберите категорию
        </InputLabel>
        <NativeSelect 
       name='category'
       onChange={handleChange}
        //   defaultValue={''}
          inputProps={{
           

            id: 'uncontrolled-native',
            
          }}
        >
          {categories.length>0 && categories.map((el)=>{
           return <option>{el}</option>
          })}
          {/* <option></option>
          <option>Еда</option>
          <option>Животные</option> */}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

