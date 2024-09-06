import { useEffect, useState } from 'react';
import LocationSelector from '../components/LocationSelector';

const fetchUfs = async () => {
  const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
  const dados = await resposta.json();
  return dados.map(uf => ({ id: uf.sigla, nome: uf.nome }));
};

const fetchMunicipios = async (uf) => {
  const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
  const dados = await resposta.json();
  return dados.map(municipio => ({ id: municipio.id, nome: municipio.nome, uf: uf }));
};

const Exercise15 = () => {
  const [ufs, setUfs] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [ufSelecionada, setUfSelecionada] = useState('');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const carregarUfs = async () => {
      const dados = await fetchUfs();
      setUfs(dados);
    };
    carregarUfs();
  }, []);

  useEffect(() => {
    if (ufSelecionada) {
      const carregarMunicipios = async () => {
        const dados = await fetchMunicipios(ufSelecionada);
        setMunicipios(dados);
      };
      carregarMunicipios();
    }
  }, [ufSelecionada]);

  const handleUfChange = (e) => {
    setUfSelecionada(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value.toLowerCase());
  };

  // Filtragem dos municípios que contêm o valor digitado
  const filteredMunicipios = municipios.filter(municipio =>
    municipio.nome.toLowerCase().includes(filterValue)
  );

  return (
    <div className="flex justify-center items-center">
      <LocationSelector
        title="Exercício 15"
        ufs={ufs}
        municipios={filteredMunicipios}
        ufSelecionada={ufSelecionada}
        onUfChange={handleUfChange}
        onFilterChange={handleFilterChange}
        filterValue={filterValue}
        filterType="includes" // Tipo de filtro que verifica se o valor está incluído no nome do município
      />
    </div>
  );
};

export default Exercise15;
