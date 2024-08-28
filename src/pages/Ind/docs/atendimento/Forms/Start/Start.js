import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Start.css';
import Instalacao from '../../img/instalacao.svg';

function Start() {
  const [formData, setFormData] = useState({
    cat_number: '',
    cliente: '',
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

  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get('https://permutioncat.fly.dev/catstart/');
        setAvailableCats(response.data);
      } catch (error) {
        console.error('Erro ao carregar CATs disponíveis:', error);
      }
    };

    fetchAvailableCats();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));

    // Se o campo alterado for "cat_number", busque as informações do cliente
    if (name === 'cat_number') {
      fetchClientData(value);
    }
  };

  const fetchClientData = async (catNumber) => {
    try {
      const response = await axios.get(`http://permutioncat.fly.dev/info/${catNumber}/`);
      setFormData((prevState) => ({
        ...prevState,
        cliente: response.data.cliente
      }));
    } catch (error) {
      console.error('Erro ao carregar informações do cliente:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://permutioncat.fly.dev/start/', formData);
      alert('Dados salvos com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      alert('Erro ao salvar dados');
    }
  };

  return (
    <div className="form">
      <div>
        <img className="start" src={Instalacao} alt="instalacao" />
      </div>
      <div className="servicestext">Instalação, Start-Up e Treinamento</div>
      <div className="inputs">
        <label>Número da CAT:</label>
        <select
          name="cat_number"
          value={formData.cat_number}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          {availableCats.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        
        <label>Cliente:</label>
        <input
          type="text"
          name="cliente"
          value={formData.cliente}
          readOnly
        />
        
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
      <div>
        <button className='saveind' onClick={handleSubmit}>Salvar</button>
      </div>
    </div>
  );
}

export default Start;
