import { useState, useMemo } from 'react';
import { faker } from '@faker-js/faker';
import NamesCard from '../components/NamesCard';

const Exercise11 = () => {
  // Gerando 100 nomes completos e cargos usando Faker.js
  const data = useMemo(() => Array.from({ length: 100 }, () => ({
    nome: faker.person.fullName(),
    cargo: faker.person.jobTitle(),
  })), []);

  // Estado para o filtro
  const [filtro, setFiltro] = useState('');

  // Função para lidar com a mudança no filtro
  const handleInputChange = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <NamesCard
        title='Exercício 11'
        filtro={filtro}
        onInputChange={handleInputChange}
        data={data}
        columns={['Nome', 'Cargo']}
      />
    </div>
  );
};

export default Exercise11;
