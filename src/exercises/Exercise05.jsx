import { useReducer, useState } from 'react';
import TodoList from '../components/TodoList';

// Ações do reducer
const ACOES = {
  ADICIONAR: 'adicionar',
  EXCLUIR: 'excluir',
};

// Função reducer para gerenciar a lista de tarefas
const reducer = (estado, acao) => {
  switch (acao.type) {
    case ACOES.ADICIONAR:
      return [...estado, { texto: acao.payload, completa: false }];
    case ACOES.EXCLUIR:
      return estado.filter((_, indice) => indice !== acao.payload);
    default:
      return estado;
  }
};

const Exercise05 = () => {
  const [tarefas, dispatch] = useReducer(reducer, []); // Estado da lista de tarefas
  const [valorInput, setValorInput] = useState(''); // Estado do input

  const adicionarTarefa = () => {
    if (valorInput) {
      dispatch({ type: ACOES.ADICIONAR, payload: valorInput });
      setValorInput(''); // Limpa o input após adicionar
    }
  };

  const excluirTarefa = (indice) => {
    dispatch({ type: ACOES.EXCLUIR, payload: indice });
  };

  return (
    <div className="flex justify-center items-center">
      <TodoList
        title="Exercício 05"
        valorInput={valorInput}
        setValorInput={setValorInput}
        aoAdicionarTarefa={adicionarTarefa}
        aoExcluirTarefa={excluirTarefa}
        tarefas={tarefas}
      />
    </div>
  );
};

export default Exercise05;
