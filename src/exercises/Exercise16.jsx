import { useState, useEffect } from 'react';
import { Card, CardContent, TextField, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios'; // Usando Axios para fazer requisições

// Função utilitária para validar se o ano é uma década terminada em zero
const isValidDecade = (year) => {
  const decade = parseInt(year);
  return !isNaN(decade) && decade % 10 === 0 && year.length === 4;
};

const Exercise16 = () => {
  // Estado para controlar o ano inserido
  const [decade, setDecade] = useState('');
  // Estado para armazenar os dados da API
  const [ranking, setRanking] = useState([]);
  // Estado para controlar o erro de input
  const [error, setError] = useState('');
  // Estado para ordenar a tabela
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('position');
  // Estado para armazenar a lista original para ordenação alfabética
  const [originalRanking, setOriginalRanking] = useState([]);
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  // Função para buscar o ranking de nomes da década
  const fetchRanking = async (decade) => {
    try {
      const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=${decade}`
      );
      const data = response.data[0].res.map((item, index) => ({
        ...item,
        position: index + 1, // Adiciona a posição baseada na ordem original
      }));
      setRanking(data);
      setOriginalRanking(data);
      setError('');
    } catch (error) {
      console.log('Erro:', error.message);
      setError('Não foi possível buscar os dados. Verifique o ano digitado.');
      setRanking([]);
      setOriginalRanking([]);
    }
  };

  // Função chamada ao submeter o input
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidDecade(decade)) {
      fetchRanking(decade);
    } else {
      setError('Por favor, insira um ano válido terminado em zero (ex: 1980).');
      setRanking([]);
      setOriginalRanking([]);
    }
  };

  // Função para manipular a ordenação da tabela
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  useEffect(() => {
    if (sortAlphabetically) {
      setRanking([...originalRanking].sort((a, b) => a.nome.localeCompare(b.nome)));
    } else {
      const sortedData = [...originalRanking].sort((a, b) => {
        if (orderBy === 'position') {
          return order === 'asc' ? a.position - b.position : b.position - a.position;
        }
        if (orderBy === 'frequencia') {
          return order === 'asc' ? a.frequencia - b.frequencia : b.frequencia - a.frequencia;
        }
        return 0;
      });
      setRanking(sortedData);
    }
  }, [order, orderBy, sortAlphabetically, originalRanking]);

  return (
    <div className="flex justify-center items-center">
      <Card
        sx={{
          p: 4,
          m: 4,
          maxWidth: '600px',
          borderRadius: 6,
          backgroundColor: '#959595',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.9)',
        }}
      >
        <CardContent>
          <Typography variant="h4" color="white" textAlign="center">
            Exercício 16
          </Typography>
          <Typography variant="h6" color="black" textAlign="center" sx={{ marginTop: 2 }}>
            Ranking de Nomes por Década:
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Digite uma década (ex: 1990)"
              value={decade}
              onChange={(e) => setDecade(e.target.value)}
              fullWidth
              sx={{
                marginTop: 2,
                backgroundColor: '#fff',
                borderRadius: 3,
                '& .MuiOutlinedInput-root': { borderRadius: 3 },
                boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.5)',
                mb: 3,
              }}
            />
            {error && (
              <Typography color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              fullWidth
            >
              Buscar Ranking
            </Button>
            <Button
              onClick={() => setSortAlphabetically(!sortAlphabetically)}
              variant="outlined"
              color="secondary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Ordenar por Nome {sortAlphabetically ? '↓' : '↑'}
            </Button>
          </form>

          {/* Tabela para exibir o ranking */}
          {ranking.length > 0 && (
            <TableContainer component={Paper} sx={{ mt: 4 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <span>Posição</span>
                      <Button onClick={() => handleRequestSort('position')}>
                        {orderBy === 'position' ? (order === 'asc' ? '↑' : '↓') : '↑↓'}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <span>Nome</span>
                      <Button onClick={() => setSortAlphabetically(!sortAlphabetically)}>
                        {sortAlphabetically ? '↔️' : 'A-Z'}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <span>Frequência</span>
                      <Button onClick={() => handleRequestSort('frequencia')}>
                        {orderBy === 'frequencia' ? (order === 'asc' ? '↑' : '↓') : '↑↓'}
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ranking.map((item) => (
                    <TableRow key={item.position} sx={{ backgroundColor: item.position % 2 === 0 ? '#f5f5f5' : '#ffffff' }}>
                      <TableCell>
                        <Avatar
                          sx={{
                            bgcolor: '#e0e0e0', // Cinza claro
                            color: 'black',
                            width: 32,
                            height: 32,
                            fontSize: 14, // Fonte menor
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {item.position}
                        </Avatar>
                      </TableCell>
                      <TableCell>{item.nome}</TableCell>
                      <TableCell>{item.frequencia}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Exercise16;
