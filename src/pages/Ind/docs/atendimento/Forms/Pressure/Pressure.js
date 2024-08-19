import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pressure.css";
import Manometro from "../../img/manometro.svg";

function Pressure() {
  const [formData, setFormData] = useState({
    cat_number: "",
    cliente: "",
    pressaoAlimentacao: "",
    funcionamentoCorreto: ""
  });

  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("https://permutioncat.fly.dev/catpress/");
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
      const response = await axios.get(`https://permutioncat.fly.dev/info/${catNumber}/`);
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
      await axios.post("https://permutioncat.fly.dev/pressurizador/", formData);
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados");
    }
  };

  return (
    <div className="form">
      <div>
        <img className="pressure" src={Manometro} alt="manometro" />
      </div>
      <div className="pressuretext">Sistema Pressurizador</div>
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
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label>Cliente:</label>
        <input type="text" name="cliente" value={formData.cliente} readOnly />

        <div className="input-with-unit">
          <label>Pressão de Alimentação (Modo Filtrando):</label>
          <div className="unit-input">
            <input
              type="text"
              name="pressaoAlimentacao"
              value={formData.pressaoAlimentacao}
              onChange={handleChange}
            />
            <span className="unit">kgf/cm²</span>
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
      <div>
        <button className="saveind" onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Pressure;
