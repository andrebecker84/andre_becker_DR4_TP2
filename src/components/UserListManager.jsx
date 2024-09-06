import { Card, CardContent, Typography, TextField, Button, IconButton } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PropTypes from 'prop-types';

const UserListManager = ({
  title,
  nome,
  setNome,
  idade,
  setIdade,
  onAdicionarUsuario,
  usuarios,
  onIncrementar,
  onDecrementar,
  onExcluir,
}) => {
  return (
    <Card sx={{ p: 4, m: 4, width: '500px', borderRadius: 6, backgroundColor: '#959595', boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.9)" }}>
      <CardContent>
        <Typography variant="h4" color="white" textAlign="center">
          {title}
        </Typography>
        <Typography variant="h6" color="black" textAlign="center" sx={{ marginTop: 2 }}>
          Lista de Usuários
        </Typography>
        <div className="flex flex-col gap-4">
          <TextField
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            variant="outlined"
            sx={{
              marginTop: 2,
              backgroundColor: '#fff',
              borderRadius: 3,
              '& .MuiOutlinedInput-root': { borderRadius: 3 },
              boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.5)"
            }}
            fullWidth
          />
          <TextField
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            type="number"
            variant="outlined"
            sx={{
              backgroundColor: '#fff',
              borderRadius: 3,
              '& .MuiOutlinedInput-root': { borderRadius: 3 },
              boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.5)"
            }}
            fullWidth
          />
          <Button onClick={onAdicionarUsuario} variant="contained" color="success" sx={{ mt: 2 }}>
            <AddCircleIcon />
          </Button>
        </div>
        <div className="mt-6 space-y-4">
          {usuarios.map((usuario, index) => (
            <Card key={index} sx={{ p: 2, backgroundColor: '#606060' }}>
              <CardContent>
                <Typography color="white">{`Nome: ${usuario.nome}`}</Typography>
                <Typography color="white">{`Idade: ${usuario.idade}`}</Typography>
              </CardContent>
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '3px',
                backgroundColor: '#404040',
                borderRadius: '20px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                marginTop: '20px',
              }}>
                <IconButton onClick={() => onIncrementar(index)} color="primary" aria-label="incrementar idade" size="large">
                  <ArrowCircleUpIcon fontSize="inherit" />
                </IconButton>
                <IconButton onClick={() => onDecrementar(index)} color="warning" aria-label="decrementar idade" size="large" disabled={usuario.idade <= 0}>
                  <ArrowCircleDownIcon fontSize="inherit" />
                </IconButton>
                {onExcluir && (
                  <IconButton onClick={() => onExcluir(index)} color="error" aria-label="apagar" size="large">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                )}
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Definindo os propTypes para garantir tipagem correta
UserListManager.propTypes = {
  title: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  setNome: PropTypes.func.isRequired,
  idade: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setIdade: PropTypes.func.isRequired,
  onAdicionarUsuario: PropTypes.func.isRequired,
  usuarios: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      idade: PropTypes.number.isRequired,
    })
  ).isRequired,
  onIncrementar: PropTypes.func.isRequired,
  onDecrementar: PropTypes.func.isRequired,
  onExcluir: PropTypes.func,
};

export default UserListManager;
