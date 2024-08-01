import React, { useState, useEffect } from "react";
import "./Uv.css";
import Ultravioleta from "../../img/uv.svg";
import axios from "axios"; // Importar Axios

function Uv() {
  const [formData, setFormData] = useState({
    cat_number: "",
    cliente: "",
    horas_osmose: "",
    horas_looping: "",
  });

  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/catuv/");
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

    if (name === "cat_number") {
      fetchClientData(value);
    }
  };

  const fetchClientData = async (catNumber) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/info/${catNumber}/`
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
      await axios.post("http://127.0.0.1:8000/uv/", formData);
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados");
    }
  };

  return (
    <div className="form">
      <div>
        <img
          className="uv"
          src={Ultravioleta}
          alt="Sistema de Desinfecção por UV"
        />
      </div>
      <div className="uvtext">Sistema de Desinfecção por UV</div>
      <form className="inputs">
        <div>
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
        <div>
          <label>Cliente:</label>
          <input type="text" name="cliente" value={formData.cliente} readOnly />
        </div>
        <div>
          <label htmlFor="horas_osmose">Horas Trabalhadas Osmose:</label>
          <input
            type="text"
            id="horas_osmose"
            name="horas_osmose"
            value={formData.horas_osmose}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="horas_looping">Horas Trabalhadas Looping:</label>
          <input
            type="text"
            id="horas_looping"
            name="horas_looping"
            value={formData.horas_looping}
            onChange={handleChange}
            required
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

export default Uv;
