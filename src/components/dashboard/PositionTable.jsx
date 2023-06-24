import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('XAUUSD', 159, 6.0, 24, 4.0),
  createData('XAUUSD', 237, 9.0, 37, 4.3),
  createData('XAUUSD', 262, 16.0, 24, 6.0),
  createData('XAUUSD', 305, 3.7, 67, 4.3),
  createData('XAUUSD', 356, 16.0, 49, 3.9),
];

export default function PositionTable() {
  return (
    <TableContainer component={Paper} sx={{height:'200px'}}>
      <Table s aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: '12px' }}>Chart</TableCell>
            <TableCell align="right" style={{ fontSize: '12px' }}>O.P</TableCell>
            <TableCell align="right" style={{ fontSize: '12px' }}>C.P&</TableCell>
            <TableCell align="right" style={{ fontSize: '12px' }}>PIPS</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ fontSize: '12px' }}>
                {row.name}
              </TableCell>
              <TableCell align="right" style={{ fontSize: '12px' }}>{row.calories}</TableCell>
              <TableCell align="right" style={{ fontSize: '12px' }}>{row.fat}</TableCell>
              <TableCell align="right" style={{ fontSize: '12px' }}>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
