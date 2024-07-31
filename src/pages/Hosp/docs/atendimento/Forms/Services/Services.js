import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Services.css';
import Garantia from '../../img/garantia.svg';

function Services() {
  const [formData, setFormData] = useState({
    materialDisponibilizado: '',
    servicoExecutado: '',
    sistemaSeguranca: '',
    equipamentoOperando: '',
    leituraCoerente: '',
    amostraAgua: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sua-api.com/services-data');
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
        <img className="services" src={Garantia} alt="garantia" />
      </div>
      <div className="servicestext">Serviços e Garantia</div>
      <div className="inputs">
        <label>Material disponibilizado integralmente para execução do serviço:</label>
        <select
          name="materialDisponibilizado"
          value={formData.materialDisponibilizado}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Serviço executado integralmente:</label>
        <select
          name="servicoExecutado"
          value={formData.servicoExecutado}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Sistema instalado em segurança:</label>
        <select
          name="sistemaSeguranca"
          value={formData.sistemaSeguranca}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Equipamento operando sem vazamentos:</label>
        <select
          name="equipamentoOperando"
          value={formData.equipamentoOperando}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Instrumentos com leitura coerente:</label>
        <select
          name="leituraCoerente"
          value={formData.leituraCoerente}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>

        <label>Amostra de água coletada:</label>
        <select
          name="amostraAgua"
          value={formData.amostraAgua}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="na">N/A</option>
        </select>
      </div>
    </div>
  );
}

export default Services;
