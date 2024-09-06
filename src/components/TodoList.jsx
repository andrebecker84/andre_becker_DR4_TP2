import PropTypes from 'prop-types';
import { Card, CardContent, Typography, TextField, Button, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const TodoList = ({ title, valorInput, setValorInput, aoAdicionarTarefa, aoExcluirTarefa, aoAlternarCompleta, tarefas }) => {
  return (
    <Card sx={{ padding: 4, margin: 4, width: '1000px', borderRadius: 6, backgroundColor: '#959595', boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.9)" }}>
      <CardContent>
        <Typography variant="h4" color="white" textAlign="center">
          {title}
        </Typography>
        <Typography variant="h6" color="black" textAlign="center" sx={{ marginTop: 2 }}>
          Lista de Tarefas:
        </Typography>
        <div className="flex flex-col gap-4">
          <TextField
            placeholder="Adicionar tarefa"
            value={valorInput}
            onChange={(e) => setValorInput(e.target.value)}
            variant="outlined"
            fullWidth
            sx={{
              marginTop: 4,
              backgroundColor: '#fff',
              borderRadius: 3,
              '& .MuiOutlinedInput-root': { borderRadius: 3 },
              boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.5)"
            }}
          />
          <Button onClick={aoAdicionarTarefa} variant="contained" color="success" startIcon={<AddCircleIcon />} sx={{ mt: 2 }}>
            Adicionar
          </Button>
        </div>
        <div className="mt-6 space-y-4">
          {tarefas.map((tarefa, indice) => (
            <Card key={indice} sx={{ padding: 2, backgroundColor: tarefa.completa ? '#404040' : '#606060' }}>
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography
                  color="white"
                  sx={{
                    textDecoration: tarefa.completa ? 'line-through' : 'none',
                  }}
                >
                  {tarefa.texto}
                </Typography>
                <div>
                  {aoAlternarCompleta && (
                    <IconButton onClick={() => aoAlternarCompleta(indice)} color="primary">
                      <CheckCircleIcon />
                    </IconButton>
                  )}
                  <IconButton onClick={() => aoExcluirTarefa(indice)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Validação das props usando PropTypes
TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  valorInput: PropTypes.string.isRequired,
  setValorInput: PropTypes.func.isRequired,
  aoAdicionarTarefa: PropTypes.func.isRequired,
  aoExcluirTarefa: PropTypes.func.isRequired,
  aoAlternarCompleta: PropTypes.func.isRequired,
  tarefas: PropTypes.arrayOf(
    PropTypes.shape({
      texto: PropTypes.string.isRequired,
      completa: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TodoList;
