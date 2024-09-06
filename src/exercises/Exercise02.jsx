import { useReducer } from 'react';
import UserCard from '../components/UserCard';

const ACTIONS = {
  INCREMENTAR: 'incrementar',
  DECREMENTAR: 'decrementar'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENTAR:
      return { ...state, idade: state.idade + 1 };
    case ACTIONS.DECREMENTAR:
      return { ...state, idade: state.idade - 1 };
    default:
      return state;
  }
};

const Exercise02 = () => {
  const estadoInicial = { nome: 'João', idade: 25 };
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <UserCard
      title="Exercício 02"
      usuario={estado}
      incrementar={() => dispatch({ type: ACTIONS.INCREMENTAR })}
      decrementar={() => dispatch({ type: ACTIONS.DECREMENTAR })}
      disableDecrement={estado.idade <= 0}
    />
  );
};

export default Exercise02;
