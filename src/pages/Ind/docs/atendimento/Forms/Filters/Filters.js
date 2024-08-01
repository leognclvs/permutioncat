import "./Filters.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Manometro from "../../img/manometro.svg";

function Pressure() {
  const [formData, setFormData] = useState({
    frcl_areia: "",
    tr_areia: "",
    te_areia: "",
    frcl_carvao: "",
    tr_carvao: "",
    te_carvao: "",
    frcl_abrandador: "",
    tr_abrandador: "",
    te_abrandador: "",
    tp_pre_enx: "",
    tp_enx: "",
    tp_rep: ""
  });

  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/catfiltros/");
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
      await axios.post("http://127.0.0.1:8000/filtros/", formData);
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
      <div className="pressuretext">Filtros</div>
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
          <label className="switch" style={{ display: "flex" }}>
            <p className="texto">Areia/Zeólita</p>
          </label>
            <label>Frequência/Ciclo Areia/Zeólita:</label>
            <input
              type="text"
              name="frcl_areia"
              value={formData.frcl_areia}
              onChange={handleChange}
            />

            <div className="input-with-unit">
              <label>Tempo de Retrolavagem:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="tr_areia"
                  value={formData.tr_areia}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>

            <div className="input-with-unit">
              <label>Tempo de Enxágue:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="te_areia"
                  value={formData.te_areia}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>
          <label className="switch" style={{ display: "flex" }}>
            <p className="texto">Carvão</p>
          </label>
            <label>Frequência/Ciclo Carvão:</label>
            <input
              type="text"
              name="frcl_carvao"
              value={formData.frcl_carvao}
              onChange={handleChange}
            />

            <div className="input-with-unit">
              <label>Tempo de Retrolavagem:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="tr_carvao"
                  value={formData.tr_carvao}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>

            <div className="input-with-unit">
              <label>Tempo de Enxágue:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="te_carvao"
                  value={formData.te_carvao}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>
          
          <label>Cliente:</label>
          <input type="text" name="cliente" value={formData.cliente} readOnly />

          <label className="switch" style={{ display: "flex" }}>
            <p className="texto">Abrandador</p>
          </label>
            <label>Frequência/Ciclo Abrandador:</label>
            <input
              type="text"
              name="frcl_abrandador"
              value={formData.frcl_abrandador}
              onChange={handleChange}
            />

            <div className="input-with-unit">
              <label>Tempo de Retrolavagem:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="tr_abrandador"
                  value={formData.tr_abrandador}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>

            <div className="input-with-unit">
              <label>Tempo de Sucção:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="te_abrandador"
                  value={formData.te_abrandador}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>

            <div className="input-with-unit">
              <label>Tempo de Pré-Enxágue (somente DG 40.000):</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="tp_pre_enx"
                  value={formData.tp_pre_enx}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>

            <div className="input-with-unit">
              <label>Tempo de Enxágue:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="tp_enx"
                  value={formData.tp_enx}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>

            <div className="input-with-unit">
              <label>Tempo de Reposição:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="tp_rep"
                  value={formData.tp_rep}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>
        </div>
        <div>
        <button className="saveind" onClick={handleSubmit}>
          Salvar
        </button>
      </div>
      <p className="paragrafo">Nota¹: Tempos recomendados de contato das soluções: 30' (Mínimo); 45' (Médio); 60' (Máximo)</p>
    </div>
  );
}

export default Pressure;
