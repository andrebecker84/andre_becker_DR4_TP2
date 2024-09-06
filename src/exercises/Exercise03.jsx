import { useState } from 'react';
import UserListManager from '../components/UserListManager';

const Exercise03 = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const adicionarUsuario = () => {
    if (nome && idade) {
      setUsuarios([...usuarios, { nome, idade: parseInt(idade) }]);
      setNome('');
      setIdade('');
    }
  };

  const incrementarIdade = (index) => {
    const novosUsuarios = usuarios.map((usuario, i) =>
      i === index ? { ...usuario, idade: usuario.idade + 1 } : usuario
    );
    setUsuarios(novosUsuarios);
  };

  const decrementarIdade = (index) => {
    const novosUsuarios = usuarios.map((usuario, i) =>
      i === index ? { ...usuario, idade: usuario.idade - 1 } : usuario
    );
    setUsuarios(novosUsuarios);
  };

  return (
    <div className="flex justify-center items-center">
      <UserListManager
        title="Exercício 03"
        nome={nome}
        setNome={setNome}
        idade={idade}
        setIdade={setIdade}
        onAdicionarUsuario={adicionarUsuario}
        usuarios={usuarios}
        onIncrementar={incrementarIdade}
        onDecrementar={decrementarIdade}
      />
    </div>
  );
};

export default Exercise03;
