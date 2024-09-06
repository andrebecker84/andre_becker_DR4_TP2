import PropTypes from 'prop-types';
import { Card, CardContent, TextField, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const FatorialCard = ({ numero, onInputChange, resultadosMemorizados, onCalcularFatorial, resultadoFatorial, erro }) => {
  return (
    <div className="flex justify-center items-center">
      <Card 
        sx={{
          p: 4,
          m: 4,
          width: '500px',
          borderRadius: 6,
          backgroundColor: '#959595',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.9)',
        }}
      >
        <CardContent>
          <Typography variant="h4" color="white" textAlign="center">
            Exercício 07
          </Typography>
          <Typography variant="h6" color="black" textAlign="center" sx={{ marginTop: 2 }}>
            Cálculo do Fatorial
          </Typography>
          <div className="flex flex-col gap-4 mt-4">
            <TextField
              label="Digite um número"
              value={numero}
              onChange={onInputChange}
              type="number"
              variant="outlined"
              sx={{
                backgroundColor: '#fff',
                borderRadius: 3,
                '& .MuiOutlinedInput-root': { borderRadius: 3 },
                boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.5)',
              }}
              fullWidth
            />
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ mt: 2 }}
              onClick={onCalcularFatorial}
            >
              Calcular Fatorial
            </Button>
            <Typography 
              variant="h6" 
              textAlign="center" 
              sx={{ mt: 2, color: erro ? 'red' : 'black' }}
            >
              {erro ? erro : `Resultado: ${resultadoFatorial !== null && !isNaN(resultadoFatorial) ? resultadoFatorial : ' '}`}
            </Typography>

            {/* Tabela de resultados memorizados */}
            <Table sx={{ mt: 2 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{ color: 'white' }}>Número</TableCell>
                  <TableCell align="center" style={{ color: 'white' }}>Fatorial</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resultadosMemorizados && resultadosMemorizados.length > 0 ? (
                  resultadosMemorizados.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="center" style={{ color: 'white' }}>{item.numero}</TableCell>
                      <TableCell align="center" style={{ color: 'white' }}>{item.fatorial}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell align="center" colSpan={2} style={{ color: 'white' }}>
                      Nenhum resultado memorizado
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Validação das props com valores padrão e validação para evitar erros
FatorialCard.propTypes = {
  numero: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onInputChange: PropTypes.func.isRequired,
  resultadosMemorizados: PropTypes.arrayOf(
    PropTypes.shape({
      numero: PropTypes.number.isRequired,
      fatorial: PropTypes.number.isRequired,
    })
  ),
  onCalcularFatorial: PropTypes.func.isRequired,
  resultadoFatorial: PropTypes.number,
  erro: PropTypes.string,
};

// Valores padrão para evitar erros caso as props estejam indefinidas
FatorialCard.defaultProps = {
  numero: '',
  resultadosMemorizados: [],
  resultadoFatorial: null,
  erro: '',
};

export default FatorialCard;
