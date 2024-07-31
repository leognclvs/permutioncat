import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Start.css';
import Instalacao from '../../img/instalacao.svg';

function Start() {
  const [formData, setFormData] = useState({
    preReq: '',
    matInt: '',
    preFlu: '',
    preTrat: '',
    valv: '',
    locMemb: '',
    alarm: '',
    insCoe: '',
    sisSeg: '',
    agua: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sua-api.com/start-data');
        setFormData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <div>
        <img className="start" src={Instalacao} alt="instalacao" />
      </div>
      <div className="startext">Instalação, Start-Up e Treinamento</div>
      <div className="inputs">
        <label>Pré-requisitos finalizados antes da chegada do técnico:</label>
        <select name="preReq" value={formData.preReq} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Material para instalação disponível na íntegra:</label>
        <select name="matInt" value={formData.matInt} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Pré-tratamento instalado e efetuado flush inicial:</label>
        <select name="preFlu" value={formData.preFlu} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Pré-tratamento operando com eficiência adequada:</label>
        <select name="preTrat" value={formData.preTrat} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Válvula de Alívio corretamente instalada:</label>
        <select name="valv" value={formData.valv} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Local acessível para troca de membranas:</label>
        <select name="locMemb" value={formData.locMemb} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Alarmes em funcionamento correto:</label>
        <select name="alarm" value={formData.alarm} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Instrumentos com leitura coerente:</label>
        <select name="insCoe" value={formData.insCoe} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Sistema instalado em segurança e deixado em operação correta:</label>
        <select name="sisSeg" value={formData.sisSeg} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Amostra de água coletada:</label>
        <select name="agua" value={formData.agua} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>
      </div>
    </div>
  );
}

export default Start;
