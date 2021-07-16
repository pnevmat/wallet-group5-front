import React, {useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getTransaction } from '../../redux/selectors/transactionSelectors/transactionSelectors'
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(date, type,  category,  commentary,  summ, balance) {
  return {date, type,  category,  commentary,  summ, balance };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TransactionTable() {
   
  const classes = useStyles();
// const rows=useSelector(getTransaction)
// console.log(rows)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Дата</StyledTableCell>
             <StyledTableCell align="right">Тип</StyledTableCell>
            <StyledTableCell align="right">Категория</StyledTableCell>
            <StyledTableCell align="right">Сумма</StyledTableCell>
            <StyledTableCell align="right">Комментарии</StyledTableCell>
            <StyledTableCell align="right">Баланс</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <StyledTableRow key={row.date}>
              <StyledTableCell component="th" scope="row">
              <Moment date= {row.date} />
              </StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right">{row.comments}</StyledTableCell>
              
              <StyledTableCell align="right">{row.owner.balance}</StyledTableCell>
            </StyledTableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}