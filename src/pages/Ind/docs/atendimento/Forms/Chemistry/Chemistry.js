import './Chemistry.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dosagem from '../../img/dosagem.svg';

function Chemistry() {
  const [formData, setFormData] = useState({
    produto_dosado1: "",
    concentracao_solucao1: "",
    volume_solucao1: "",
    aferir_dosadora: "",
    produto_dosado2: "",
    concentracao_solucao2: "",
    volume_solucao2: "",
    padrao_utilizado: "",
    info_padrao: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sua-api.com/chemistry-data');
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
      <div><img className='chemistry' src={Dosagem} alt='instalacao'/></div>
      <div className="startext">Sistema de Dosagem Química</div>
      <div className="inputs">
        <div className="midex">
          <label>Produto Dosado:</label>
          <input
            type="text"
            name="produto_dosado1"
            value={formData.produto_dosado1}
            onChange={handleChange}
          />
        </div>
        <div className="midex">
          <label>Concentração da Solução (1):</label>
          <input
            type="text"
            name="concentracao_solucao1"
            value={formData.concentracao_solucao1}
            onChange={handleChange}
          />
        </div>
        <div className="midex">
          <label>Volume da Solução no Tanque (1):</label>
          <input
            type="text"
            name="volume_solucao1"
            value={formData.volume_solucao1}
            onChange={handleChange}
          />
        </div>
        <label>Aferir Dosadora:</label>
        <select
          name="aferir_dosadora"
          value={formData.aferir_dosadora}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
        <div className="midex">
          <label>Produto Dosado:</label>
          <input
            type="text"
            name="produto_dosado2"
            value={formData.produto_dosado2}
            onChange={handleChange}
          />
        </div>
        <div className="midex">
          <label>Concentração da Solução (2):</label>
          <input
            type="text"
            name="concentracao_solucao2"
            value={formData.concentracao_solucao2}
            onChange={handleChange}
          />
        </div>
        <div className="midex">
          <label>Volume da Solução no Tanque (2):</label>
          <input
            type="text"
            name="volume_solucao2"
            value={formData.volume_solucao2}
            onChange={handleChange}
          />
        </div>
        <label>Padrão Utilizado:</label>
        <select
          name="padrao_utilizado"
          value={formData.padrao_utilizado}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="solucao_tampao">Solução Tampão</option>
          <option value="redox">RedOx</option>
        </select>
      </div>
      <div className="info">
        <label>Informações sobre o Padrão Utilizado:</label>
        <input
          type="text"
          className='std'
          name="info_padrao"
          value={formData.info_padrao}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Chemistry;
