import "./MixedBed.css";
import Leito from "../../img/leito.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";

function MixedBed() {
  const [formData, setFormData] = useState({
    cat_number: "",
    cliente: "",
    cond_lei: "",
    temp_lei: "",
    ser_cond_lei: "",
    const_lei: "",
  });

  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("https://permutioncat.fly.dev/catleito/");
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
      await axios.post("https://permutioncat.fly.dev/leito/", formData);
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados");
    }
  };

  return (
    <div className="form">
      <div>
        <img className="mixedbed" src={Leito} alt="Leito Misto" />
      </div>
      <div className="mixedbedtext">Leito Misto Polidor</div>
      <div className="mixed-input">
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
        </div>
        <div className="midex">
          <label htmlFor="cond_lei">Condutividade Final:</label>
          <div className="unit-input">
            <input
              type="text"
              id="cond_lei"
              name="cond_lei"
              value={formData.cond_lei}
              onChange={handleChange}
            />
            <span className="mix">µS/cm</span>
          </div>
        </div>
        <div className="midex">
          <label htmlFor="temp_lei">Temperatura:</label>
          <div className="unit-input">
            <input
              type="text"
              id="temp_lei"
              name="temp_lei"
              value={formData.temp_lei}
              onChange={handleChange}
            />
            <span className="mix">°C</span>
          </div>
        </div>
        <div className="midex">
          <label>Cliente:</label>
          <input type="text" name="cliente" value={formData.cliente} readOnly />
        </div>
        <div className="midex">
          <label htmlFor="ser_cond_lei">N° de Série do Condutivímetro:</label>
          <input
            type="text"
            id="ser_cond_lei"
            name="ser_cond_lei"
            value={formData.ser_cond_lei}
            onChange={handleChange}
          />
        </div>
        <div className="midex">
          <label htmlFor="const_lei">Constante:</label>
          <input
            type="text"
            id="const_lei"
            name="const_lei"
            value={formData.const_lei}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <button className="saveind" onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default MixedBed;
