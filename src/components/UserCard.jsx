import PropTypes from 'prop-types';
import { IconButton, Card, CardContent, Typography } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const UserCard = ({ title, usuario, incrementar, decrementar, disableDecrement }) => {
  return (
    <div className="flex justify-center items-center">
      <Card sx={{ p: 4, m: 4, width: '500px', borderRadius: 6, backgroundColor: '#959595', boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.9)" }}>
        <CardContent>
          <Typography variant="h4" color="white" textAlign="center">
            {title}
          </Typography>
          <Typography variant="h6" color="black" sx={{ m: 2 }}>
            {`Nome: ${usuario.nome}`}
          </Typography>
          <Typography variant="h6" color="black" sx={{ m: 2 }}>
            {`Idade: ${usuario.idade}`}
          </Typography>
          <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '3px',
              backgroundColor: '#404040',
              borderRadius: '20px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
              marginTop: '20px',
            }}
          >
            <IconButton onClick={incrementar} color="primary" aria-label="incrementar idade" size="large">
              <ArrowCircleUpIcon fontSize="inherit" />
            </IconButton>
            <IconButton onClick={decrementar} color="warning" aria-label="decrementar idade" size="large" disabled={disableDecrement}>
              <ArrowCircleDownIcon fontSize="inherit" />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Validação das props com PropTypes
UserCard.propTypes = {
  title: PropTypes.string.isRequired,
  usuario: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired
  }).isRequired,
  incrementar: PropTypes.func.isRequired,
  decrementar: PropTypes.func.isRequired,
  disableDecrement: PropTypes.bool.isRequired,
};

export default UserCard;
