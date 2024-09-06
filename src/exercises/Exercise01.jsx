import { useState } from 'react';
import UserCard from '../components/UserCard';

const Exercise01 = () => {
  const [usuario, setUsuario] = useState({ nome: 'João', idade: 25 });

  const incrementarIdade = () => {
    setUsuario(prevState => ({ ...prevState, idade: prevState.idade + 1 }));
  };

  const decrementarIdade = () => {
    setUsuario(prevState => ({ ...prevState, idade: prevState.idade - 1 }));
  };

  return (
    <UserCard
      title="Exercício 01"
      usuario={usuario}
      incrementar={incrementarIdade}
      decrementar={decrementarIdade}
      disableDecrement={usuario.idade <= 0}
    />
  );
};

export default Exercise01;
