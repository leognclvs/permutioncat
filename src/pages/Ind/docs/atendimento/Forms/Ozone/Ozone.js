import React, { useState, useEffect } from "react";
import "./Ozone.css";
import Ozonio from "../../img/ozonio.svg";
import axios from "axios";

function Ozone() {
  const [formData, setFormData] = useState({
    cat_number: "",
    cliente: "",
    ver_opc: "",
    orp_high: "",
    orp_low: "",
  });

  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("https://permutioncat.fly.dev/catozonio/");
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
      await axios.post("https://permutioncat.fly.dev/ozonio/", formData);
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados");
    }
  };

  return (
    <div className="ozone-form">
      <div>
        <img className="ozone" src={Ozonio} alt="Sistema Gerador de Ozônio" />
      </div>
      <div className="ozonetext">Sistema Gerador de Ozônio</div>
      <form className="ozone-inputs">
        <div>
          <label>Número da CAT:</label>
          <select
            name="cat_number"
            className="ozone-field"
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
          <input
            className="ozone-field"
            name="cliente"
            value={formData.cliente}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="verificacao">
            Verificação Operacional (Modo Manual):
          </label>
          <select
            id="verificacao"
            className="ozone-field"
            name="verificacao"
            value={formData.verificacao}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="funcionamento_correto">Funcionamento Correto</option>
            <option value="apresenta_defeito">Apresenta Defeito</option>
          </select>
        </div>
        <div>
          <label htmlFor="orp_high">ORP High:</label>
          <input
            className="ozone-field"
            id="orp_high"
            name="orp_high"
            value={formData.orp_high}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="orp_low">ORP Low:</label>
          <input
            className="ozone-field"
            id="orp_low"
            name="orp_low"
            value={formData.orp_low}
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

export default Ozone;
