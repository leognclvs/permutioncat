import "./Conductivity.css";
import Condutivimetro from "../../img/condutivimetro.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Conductivity() {
  const [formData, setFormData] = useState({
    cat_number: "",
    cliente: "",
    mod_cond: "",
    const: "",
    n_lote: "",
    cond_std: "",
    temp_std: "",
    marca: "",
    cond_aferida: "",
    temp_aferida: "",
  });

  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("https://permutioncat.fly.dev/catafericao/");
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
      await axios.post("https://permutioncat.fly.dev/afericao/", formData);
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados");
    }
  };

  return (
    <div className="form">
      <div>
        <img className="conductivity" src={Condutivimetro} alt="Aferição Condutivímetro" />
      </div>
      <div className="conductivitytext">Aferição do Condutivímetro</div>
      <form className="conduct-input">
        <div className="conduct">
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
        <div className="conduct">
          <label>Cliente:</label>
          <input type="text" name="cliente" value={formData.cliente} readOnly />
        </div>
        <div className="conduct">
          <label htmlFor="mod_cond">Modelo do Condutivímetro:</label>
          <input
            type="text"
            id="mod_cond"
            name="mod_cond"
            value={formData.mod_cond}
            onChange={handleChange}
          />
        </div>
        <div className="conduct">
          <label htmlFor="const">Constante:</label>
          <input
            type="text"
            id="const"
            name="const"
            value={formData.const}
            onChange={handleChange}
          />
        </div>
        <div className="conduct">
          <label htmlFor="n_lote">n° do Lote da Solução Padrão de Condutividade:</label>
          <input
            type="text"
            id="n_lote"
            name="n_lote"
            value={formData.n_lote}
            onChange={handleChange}
          />
        </div>
        <div className="conduct">
          <label htmlFor="cond_std">Condutividade da Solução Padrão:</label>
          <input
            type="text"
            id="cond_std"
            name="cond_std"
            value={formData.cond_std}
            onChange={handleChange}
          />
        </div>
        <div className="conduct">
          <label htmlFor="temp_std">Temperatura da Solução Padrão:</label>
          <input
            type="text"
            id="temp_std"
            name="temp_std"
            value={formData.temp_std}
            onChange={handleChange}
          />
        </div>
        <div className="conduct">
          <label htmlFor="marca">Marca da Solução Padrão de Condutividade:</label>
          <input
            type="text"
            id="marca"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
          />
        </div>
        <div className="conduct">
          <label htmlFor="cond_aferida">Condutividade Aferida:</label>
          <input
            type="text"
            id="cond_aferida"
            name="cond_aferida"
            value={formData.cond_aferida}
            onChange={handleChange}
          />
        </div>
        <div className="conduct">
          <label htmlFor="temp_aferida">Temperatura Aferida:</label>
          <input
            type="text"
            id="temp_aferida"
            name="temp_aferida"
            value={formData.temp_aferida}
            onChange={handleChange}
          />
        </div>
      </form>
      <div>
        <button className="saveind" onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Conductivity;
