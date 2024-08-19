import './Chemistry.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dosagem from '../../img/dosagem.svg';

function Chemistry() {
  const [formData, setFormData] = useState({
    cat_number: "",
    cliente: "",
    prod_dos1: "",
    conc_dos1: "",
    volume_dos1: "",
    prod_dos2: "",
    conc_dos2: "",
    volume_dos2: "",
    aferir_dos: "",
    padrao: "",
    info_std: ""
  });

  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("https://permutioncat.fly.dev/catdosagem/");
        setAvailableCats(response.data);
      } catch (error) {
        console.error("Erro ao carregar CATs disponíveis:", error);
      }
    };

    fetchAvailableCats();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Se o campo alterado for "cat_number", busque as informações do cliente
    if (name === "cat_number") {
      fetchClientData(value);
    }
  };

  const fetchClientData = async (catNumber) => {
    try {
      console.log(`Fetching client data for CAT number: ${catNumber}`);
      const response = await axios.get(`https://permutioncat.fly.dev/info/${catNumber}/`);
      console.log("Client data fetched:", response.data);
      setFormData((prevState) => ({
        ...prevState,
        cliente: response.data.cliente,
      }));
    } catch (error) {
      console.error("Erro ao carregar informações do cliente:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://permutioncat.fly.dev/dosagem/", formData);
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div><img className='chemistry' src={Dosagem} alt='instalacao'/></div>
      <div className="servicestext">Sistema de Dosagem Química</div>
      <div className="inputs">
        <div className="midex">
          <label>Número da CAT:</label>
          <select
            name="cat_number"
            value={formData.cat_number}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            {availableCats.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <label>Produto Dosado (1):</label>
          <input
            type="text"
            name="prod_dos1"
            value={formData.prod_dos1}
            onChange={handleChange}
          />
        </div>
        <div className="midex">
          <label>Concentração da Solução (1):</label>
          <input
            type="text"
            name="conc_dos1"
            value={formData.conc_dos1}
            onChange={handleChange}
          />
        </div>
        <div className="midex">
          <label>Volume da Solução no Tanque (1):</label>
          <input
            type="text"
            name="volume_dos1"
            value={formData.volume_dos1}
            onChange={handleChange}
          />
        </div>
        <label>Aferir Dosadora:</label>
        <select
          name="aferir_dos"
          value={formData.aferir_dos}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
        <label>Cliente:</label>
          <input type="text" name="cliente" value={formData.cliente} readOnly />
        <div className="midex">
          <label>Produto Dosado (2):</label>
          <input
            type="text"
            name="prod_dos2"
            value={formData.prod_dos2}
            onChange={handleChange}
          />
        </div>
        <div className="midex">
          <label>Concentração da Solução (2):</label>
          <input
            type="text"
            name="conc_dos2"
            value={formData.conc_dos2}
            onChange={handleChange}
          />
        </div>
        <div className="midex">
          <label>Volume da Solução no Tanque (2):</label>
          <input
            type="text"
            name="volume_dos2"
            value={formData.volume_dos2}
            onChange={handleChange}
          />
        </div>
        <label>Padrão Utilizado:</label>
        <select
          name="padrao"
          value={formData.padrao}
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
          name="info_std"
          value={formData.info_std}
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="saveind" onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </form>
  );
}

export default Chemistry;
