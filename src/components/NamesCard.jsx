import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  TablePagination,
  TableSortLabel,
  TextField
} from '@mui/material';
import { pink } from '@mui/material/colors';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const NamesCard = ({ title, filtro, onInputChange, data, columns }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(columns[0].toLowerCase());
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = data.filter(item =>
    columns.some(column => item[column.toLowerCase()].toLowerCase().includes(filtro.toLowerCase()))
  );

  const sortedData = filteredData.sort(getComparator(order, orderBy));

  return (
    <Card sx={{ padding: 4, margin: 4, width: '1000px', borderRadius: 6, backgroundColor: '#959595', boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.9)" }}>
      <CardContent>
        <Typography variant="h4" color="white" textAlign="center">
          {title}
        </Typography>
        <Typography variant="h6" color="black" textAlign="center" sx={{ marginTop: 2, marginBottom: 2 }}>
          Lista de Dados:
        </Typography>

        {/* Tabela com dados filtrados e ordenados */}
        <TableContainer component={Paper} sx={{ maxHeight: 400, backgroundColor: '#fff' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column}
                    style={{ fontWeight: 'bold', backgroundColor: '#606060', color: '#fff' }}
                  >
                    <TableSortLabel
                      active={orderBy === column.toLowerCase()}
                      direction={orderBy === column.toLowerCase() ? order : 'asc'}
                      onClick={() => handleRequestSort(column.toLowerCase())}
                    >
                      {column}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size="small"
                      placeholder={`Filtrar por ${column}`}
                      onChange={e => onInputChange(e, column.toLowerCase())}
                      sx={{ 
                        marginBottom: 1,
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        '& .MuiOutlinedInput-root': { borderRadius: 10 },
                        boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.5)',
                      }}
                    />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => (
                  <TableRow key={index} hover style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff' }}>
                    {columns.map((column) => (
                      <TableCell key={column}>{item[column.toLowerCase()]}</TableCell>
                    ))}
                  </TableRow>
                ))
              }
              {sortedData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={columns.length} style={{ fontWeight: 'bold', color: pink[500], display: 'flex', alignItems: 'center' }}>
                    Nenhum dado encontrado <SentimentDissatisfiedIcon sx={{ marginLeft: 1 }} />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Barra de controle de paginação */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sortedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>
    </Card>
  );
};

// Definindo as PropTypes
NamesCard.propTypes = {
  title: PropTypes.string.isRequired,
  filtro: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NamesCard;
