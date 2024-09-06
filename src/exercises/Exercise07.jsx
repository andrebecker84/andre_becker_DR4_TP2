import { useState, useCallback } from 'react';
import FatorialCard from '../components/FatorialCard';

const Exercise07 = () => {
  const [numero, setNumero] = useState('');
  const [resultadosMemorizados, setResultadosMemorizados] = useState([]);
  const [resultadoFatorial, setResultadoFatorial] = useState(null);
  const [erro, setErro] = useState('');

  const handleInputChange = (event) => {
    setNumero(event.target.value);
  };

  const calcularFatorial = useCallback((n) => {
    try {
      if (n < 0) throw new Error('O fatorial não é definido para números negativos.');
      if (n > 1000) throw new Error('O fatorial para números maiores que 1000 é muito grande para ser calculado com precisão.');
      
      let resultado = 1;
      for (let i = 2; i <= n; i++) {
        resultado *= i;
        if (!isFinite(resultado)) throw new Error('Número muito grande para calcular o fatorial.');
      }
      return resultado;
    } catch (error) {
      setErro(error.message);
      return null;
    }
  }, []);

  const handleCalcularFatorial = () => {
    const num = Number(numero);
    if (!isNaN(num) && num >= 0) {
      const resultado = calcularFatorial(num);
      if (resultado !== null) {
        setResultadoFatorial(resultado);
        setErro(''); // Limpa a mensagem de erro
        setResultadosMemorizados((prev) => [
          ...prev,
          { numero: num, fatorial: resultado }
        ]);
      }
    } else {
      setErro('Por favor, insira um número válido.');
      setResultadoFatorial(null);
    }
  };

  return (
    <FatorialCard
      numero={numero}
      onInputChange={handleInputChange}
      resultadosMemorizados={resultadosMemorizados}
      onCalcularFatorial={handleCalcularFatorial}
      resultadoFatorial={resultadoFatorial}
      erro={erro}
    />
  );
};

export default Exercise07;
