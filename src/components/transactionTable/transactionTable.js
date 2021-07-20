import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getTransaction } from '../../redux/selectors/transactionSelectors/transactionSelectors'
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/selectors/authorisationSelectors';
import operation from '../../redux/operations/transactionOperations'
import moment from 'moment';


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

function createData(date, type, category, commentary, summ, balance) {
  return { date, type, category, commentary, summ, balance };
}



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TransactionTable() {

  const dispatch = useDispatch();
  const token =useSelector(selectors.getUserToken);
  useEffect(() => {
      dispatch(operation.fetchTransaction(token));
   }, [dispatch]);

  const classes = useStyles();
  const rows = useSelector(getTransaction)
  
//   const newDate=(date)=>{
// return moment(date,"D/MM/YY" )
//   }

  console.log(rows)
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
          {rows.length>0 && rows.map((rows, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                <Moment date={rows.date} />
              </StyledTableCell>
              <StyledTableCell align="right">{rows.type}</StyledTableCell>
              <StyledTableCell align="right">{rows.category}</StyledTableCell>
              <StyledTableCell align="right">{rows.amount}</StyledTableCell>
              <StyledTableCell align="right">{rows.comments}</StyledTableCell>
              <StyledTableCell align="right">{rows.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}