import { useState, useEffect } from 'react';
import axios from 'axios';
import type { CurriculoData } from '../types/curriculo';

export const useCurriculo = () => {
  const [dados, setDados] = useState<CurriculoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Endereço da sua API que rodamos no passo anterior
    axios.get('http://localhost:3001/api/curriculo')
      .then(response => {
        setDados(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar dados do currículo:", error);
        setLoading(false);
      });
  }, []);

  return { dados, loading };
};