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

const Exercise13 = () => {
  const [ufs, setUfs] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [ufSelecionada, setUfSelecionada] = useState('');

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

  return (
    <div className="flex justify-center items-center">
      <LocationSelector
        title="Exercício 13"
        ufs={ufs}
        municipios={municipios}
        ufSelecionada={ufSelecionada}
        onUfChange={handleUfChange}
        filterType={null} // Sem filtro
      />
    </div>
  );
};

export default Exercise13;
