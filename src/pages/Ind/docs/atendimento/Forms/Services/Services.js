import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Services.css";
import Garantia from "../../img/garantia.svg";

function Services() {
  const [formData, setFormData] = useState({
    cat_number: "",
    cliente: "",
    matDisp: "",
    servExc: "",
    sistIns: "",
    equipVaz: "",
    leiCoer: "",
    amostra: "",
  });

  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("https://permutioncat.fly.dev/catservicos/");
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
      const response = await axios.get(
        `https://permutioncat.fly.dev/info/${catNumber}/`
      );
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
      await axios.post("https://permutioncat.fly.dev/servicos/", formData);
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados");
    }
  };

  return (
    <div className="form">
      <div>
        <img className="services" src={Garantia} alt="garantia" />
      </div>
      <div className="servicestext">Serviços e Garantia</div>
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

        <label>
          Material disponibilizado integralmente para execução do serviço:
        </label>
        <select
          name="matDisp"
          value={formData.matDisp}
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
          name="servExc"
          value={formData.servExc}
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
          name="sistIns"
          value={formData.sistIns}
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
          name="equipVaz"
          value={formData.equipVaz}
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
          name="leiCoer"
          value={formData.leiCoer}
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
          name="amostra"
          value={formData.amostra}
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

export default Services;
