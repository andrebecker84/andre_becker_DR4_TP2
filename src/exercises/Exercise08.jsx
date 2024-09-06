import { useState, useMemo } from 'react';
import { faker } from '@faker-js/faker';
import NamesCard from '../components/NamesCard';

const Exercise08 = () => {
  // Gerando 100 nomes completos usando Faker.js
  const data = useMemo(() => Array.from({ length: 100 }, () => ({
    nome: faker.person.fullName()
  })), []);

  // Estado para o filtro
  const [filtro, setFiltro] = useState('');

  // Função para lidar com a mudança no filtro
  const handleInputChange = (event) => {
    setFiltro(event.target.value);
  };

  // Filtrando a lista de nomes conforme o texto digitado (contém em qualquer parte)
  const nomesFiltrados = useMemo(
    () => data.filter((item) => item.nome.toLowerCase().includes(filtro.toLowerCase())),
    [filtro, data]
  );

  return (
    <div className="flex justify-center items-center">
      <NamesCard
        title='Exercício 08'
        filtro={filtro}
        onInputChange={handleInputChange}
        data={nomesFiltrados}
        columns={['Nome']} // Ajustado para refletir a coluna única
      />
    </div>
  );
};

export default Exercise08;
