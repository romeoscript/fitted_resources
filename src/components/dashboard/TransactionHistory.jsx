import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Ref, Chart, fat, carbs, Duration, PIPs, PL) {
  return { Ref, Chart, fat, carbs, Duration, PIPs, PL };
}

const rows = [
  createData('usdt/use', 159, 12,44, 6.0, 24, 4.0),
  createData('usdt/use', 237, 9.0, 37, 4.3,12,44,),
  createData('usdt/use', 262, 16.0, 24, 6.0,12,44,),
  createData('usdt/use', 305, 3.7, 67, 4.3,12,44,),
  createData('usdt/use', 356, 16.0,12,44, 49, 3.9),
];

export default function TransactionHistory() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ref</TableCell>
            <TableCell align="right">Chart</TableCell>
            <TableCell align="right">O.P</TableCell>
            <TableCell align="right">C.P</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">PIPs</TableCell>
            <TableCell align="right">P/L</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Ref}
              </TableCell>
            
              <TableCell align="right">{row.Chart}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.Duration}</TableCell>
              <TableCell align="right">{row.PIPs}</TableCell>
              <TableCell align="right">{row.PL}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}