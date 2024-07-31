import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pressure.css';
import Manometro from '../../img/manometro.svg';

function Pressure() {
  const [formData, setFormData] = useState({
    pressaoAlimentacao: '',
    funcionamentoCorreto: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sua-api.com/pressure-data');
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
      <div><img className="pressure" src={Manometro} alt="manometro" /></div>
      <div className="pressuretext">Serviços e Garantia</div>
      <div className="inputs">
        <div className="input-with-unit">
          <label>Pressão de Alimentação (Modo Filtrando):</label>
          <div className="unit-input">
            <input
              type="text"
              name="pressaoAlimentacao"
              value={formData.pressaoAlimentacao}
              onChange={handleChange}
            />
            <span className="unidade">kgf/cm²</span>
          </div>
        </div>

        <label>Em funcionamento correto?</label>
        <select
          name="funcionamentoCorreto"
          value={formData.funcionamentoCorreto}
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

export default Pressure;
