import PropTypes from 'prop-types';
import { Typography, Select, MenuItem, InputLabel, Card, TextField } from '@mui/material';
import { FixedSizeList } from 'react-window';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const LocationSelector = ({
  title,
  ufs,
  municipios,
  ufSelecionada,
  onUfChange,
  onFilterChange,
  filterValue,
}) => {
  return (
    <Card sx={{ padding: 4, margin: 4, width: '500px', borderRadius: 6, backgroundColor: '#959595', boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.9)" }}>
      <Typography variant="h4" color="white" textAlign="center">
        {title}
      </Typography>
      <Typography variant="h6" color="black" textAlign="center" sx={{ marginTop: 2, marginBottom: 2 }}>
        Lista de Municípios:
      </Typography>

      <InputLabel id="uf-select-label" sx={{ marginBottom: 1 }}>Escolha o Estado:</InputLabel>
      <Select
        labelId="uf-select-label"
        value={ufSelecionada}
        onChange={onUfChange}
        fullWidth
        sx={{
          backgroundColor: '#fff',
          borderRadius: 3,
          '& .MuiOutlinedInput-root': { borderRadius: 3 },
          boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.5)"
        }}
      >
        {ufs.map((uf) => (
          <MenuItem key={uf.id} value={uf.id}>
            {uf.nome}
          </MenuItem>
        ))}
      </Select>

      {onFilterChange && (
        <>
          <InputLabel id="filter-label" sx={{ marginTop: 2, marginBottom: 1 }}>Filtrar Municípios:</InputLabel>
          <TextField
            id="filter-input"
            value={filterValue}
            onChange={onFilterChange}
            fullWidth
            sx={{
              backgroundColor: '#fff',
              borderRadius: 3,
              '& .MuiOutlinedInput-root': { borderRadius: 3 },
              boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.5)"
            }}
          />
        </>
      )}

      <Typography variant="h6" color="white" sx={{ marginTop: 4 }}>
        Municípios:
      </Typography>
      <FixedSizeList
        height={200}
        width="100%"
        itemSize={46}
        itemCount={municipios.length}
        overscanCount={5}
      >
        {({ index, style }) => (
          <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemText primary={municipios[index].nome} />
          </ListItem>
        )}
      </FixedSizeList>
    </Card>
  );
};

LocationSelector.propTypes = {
  title: PropTypes.string.isRequired,
  ufs: PropTypes.array.isRequired,
  municipios: PropTypes.array.isRequired,
  ufSelecionada: PropTypes.string.isRequired,
  onUfChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func,
  filterValue: PropTypes.string,
  filterType: PropTypes.string,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
};

export default LocationSelector;
