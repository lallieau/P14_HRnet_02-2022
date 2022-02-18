import { useState } from 'react';
import { getComparator } from '../helpers/sortEmployeeTable';
import { EmployeeTableHead } from './EmployeeTableHeader';
import { SearchBar } from './Form/SearchBar';

//material ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

// import SearchBar from 'material-ui-search-bar';

const dayjs = require('dayjs');

const employees = JSON.parse(localStorage.getItem('employees')) ?? [];
const originalEmployeesRows = employees.map(employee => {
  return {
    firstName: employee.firstName,
    lastName: employee.lastName,
    birthdate: employee.birthdate,
    department: employee.department.label,
    startDate: employee.startDate,
    street: employee.street,
    city: employee.city,
    state: employee.state.value,
    zipCode: employee.zipCode,
  };
});

export const EmployeeTable = () => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstName');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [rows, setRows] = useState(originalEmployeesRows);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const requestSearch = searchedVal => {
    console.log(searchedVal);
    const filteredRows = originalEmployeesRows.filter(row => {
      return [
        row.firstName,
        row.lastName,
        row.department,
        row.street,
        row.city,
        row.state,
        row.zipCode,
      ].some(text => {
        const [formattedText, formattedSearch] = [
          text.trim().toLowerCase(),
          searchedVal.trim().toLowerCase(),
        ];

        return formattedText.includes(formattedSearch);
      });
    });
    setRows(filteredRows);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - employees.length) : 0;

  return (
    <>
      <SearchBar requestSearch={requestSearch} />
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <EmployeeTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={employees.length}
          />
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort(getComparator(order, orderBy))
              .map((row, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell component="th" scope="row">
                      {row.firstName}
                    </TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>
                      {dayjs(row.birthdate).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>{row.department}</TableCell>
                    <TableCell>
                      {dayjs(row.startDate).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>{row.street}</TableCell>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>{row.state}</TableCell>
                    <TableCell>{row.zipCode}</TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={9} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={employees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ marginBottom: '36px' }}
      />
    </>
  );
};
