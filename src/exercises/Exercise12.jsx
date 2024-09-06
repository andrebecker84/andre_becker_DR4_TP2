import { useEffect, useState } from 'react';
import { Card, MenuItem, Select, Typography, InputLabel } from '@mui/material';

const fetchUfs = async () => {
  const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
  return resposta.json();
};

const fetchMunicipios = async (uf) => {
  const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
  return resposta.json();
};

const Exercise12 = () => {
  const [ufs, setUfs] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [ufSelecionada, setUfSelecionada] = useState('');
  const [municipioSelecionado, setMunicipioSelecionado] = useState('');

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

  return (
    <div className="flex justify-center items-center">
      <Card sx={{ padding: 4, margin: 4, width: '500px', borderRadius: 6, backgroundColor: '#959595', boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.9)" }}>
        <Typography variant="h4" color="white" textAlign="center"  sx={{ marginTop: 2 }}>
          Exercício 12
        </Typography>
        
        <InputLabel id="UF" sx={{ marginTop: 2, marginBottom: 1 }}>Escolha a UF:</InputLabel>
        <Select
          labelId="UFlabel"
          value={ufSelecionada}
          onChange={(e) => setUfSelecionada(e.target.value)}
          fullWidth
          sx={{
            backgroundColor: '#fff',
            borderRadius: 3,
            '& .MuiOutlinedInput-root': { borderRadius: 3 },
            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.5)"
          }}
        >
          {ufs.map((uf) => (
            <MenuItem key={uf.id} value={uf.id}>
              {uf.nome}
            </MenuItem>
          ))}
        </Select>  

        <InputLabel id="municipio" sx={{ marginTop: 2, marginBottom: 1 }}>Escolha o Município:</InputLabel>
        <Select
          labelId="municipio"
          value={municipioSelecionado}
          onChange={(e) => setMunicipioSelecionado(e.target.value)}
          fullWidth
          sx={{
            marginBottom: 4,
            backgroundColor: '#fff',
            borderRadius: 3,
            '& .MuiOutlinedInput-root': { borderRadius: 3 },
            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.5)"
          }}
        >
          {municipios.map((municipio) => (
              <MenuItem key={municipio.id} value={municipio.id}>
                {municipio.nome}
              </MenuItem>
            ))}
        </Select>
      </Card>
    </div>
  );
};

export default Exercise12;
