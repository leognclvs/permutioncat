import "./Desmineralizer.css";
import Desmineralizador from "../../img/desmineralizador.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Flex from "../../../../../../components/Flex";

function Desmineralizer() {
  const [formData, setFormData] = useState({
    cat_number: "",
    cliente: "",
    frcl_cat: "",
    tr_cat: "",
    ts_cat: "",
    tp_cat: "",
    te_cat: "",
    pre_enx_cat: "",
    enx_cat: "",
    frcl_ani: "",
    tr_ani: "",
    ts_ani: "",
    tp_ani: "",
    enx_ani: "",
    cond_fin: "",
    temp: "",
    ser_cond: "",
    constante: ""
  });

  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/catdesmi/");
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
      const response = await axios.get(`http://127.0.0.1:8000/info/${catNumber}/`);
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
      await axios.post("http://127.0.0.1:8000/desmi/", formData);
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados");
    }
  };

  return (
    <form className="desmi-form" onSubmit={handleSubmit}>
      <div>
        <img className="desmineralizer" src={Desmineralizador} alt="desmineralizador" />
      </div>
      <div className="servicestext">Sistema Desmineralizador</div>
      <Flex>
        <div className="griddesmi">
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

          <label>Frequência/Ciclo - Catiônica:</label>
          <input
            type="text"
            name="frcl_cat"
            value={formData.frcl_cat}
            onChange={handleChange}
          />

          <div className="input-desmi">
            <label>Tempo de Retrolavagem:</label>
            <div className="desmi-input">
              <input
                type="text"
                name="tr_cat"
                value={formData.tr_cat}
                onChange={handleChange}
              />
              <span className="desmi">Minutos</span>
            </div>
          </div>

          <div className="input-desmi">
            <label>Tempo de Sucção:</label>
            <div className="desmi-input">
              <input
                type="text"
                name="te_cat"
                value={formData.te_cat}
                onChange={handleChange}
              />
              <span className="desmi">Minutos</span>
            </div>
          </div>

          <div className="input-desmi">
            <label>Tempo de Pré-Enxágue (somente DG 40.000):</label>
            <div className="desmi-input">
              <input
                type="text"
                name="pre_enx_cat"
                value={formData.pre_enx_cat}
                onChange={handleChange}
              />
              <span className="desmi">Minutos</span>
            </div>
          </div>

          <div className="input-desmi">
            <label>Tempo de Enxágue:</label>
            <div className="desmi-input">
              <input
                type="text"
                name="enx_cat"
                value={formData.enx_cat}
                onChange={handleChange}
              />
              <span className="desmi">Minutos</span>
            </div>
          </div>
        </div>
        <div className="griddesmi">
        <label>Cliente:</label>
        <input type="text" name="cliente" value={formData.cliente} readOnly />
          <label>Frequência/Ciclo - Aniônica:</label>
          <input
            type="text"
            name="frcl_ani"
            value={formData.frcl_ani}
            onChange={handleChange}
          />

          <div className="input-desmi">
            <label>Tempo de Retrolavagem:</label>
            <div className="desmi-input">
              <input
                type="text"
                name="tr_ani"
                value={formData.tr_ani}
                onChange={handleChange}
              />
              <span className="desmi">Minutos</span>
            </div>
          </div>

          <div className="input-desmi">
            <label>Tempo de Sucção:</label>
            <div className="desmi-input">
              <input
                type="text"
                name="ts_ani"
                value={formData.ts_ani}
                onChange={handleChange}
              />
              <span className="desmi">Minutos</span>
            </div>
          </div>

          <div className="input-desmi">
            <label>Tempo de Pré-Enxágue (somente DG 40.000):</label>
            <div className="desmi-input">
              <input
                type="text"
                name="tp_ani"
                value={formData.tp_ani}
                onChange={handleChange}
              />
              <span className="desmi">Minutos</span>
            </div>
          </div>

          <div className="input-desmi">
            <label>Tempo de Enxágue:</label>
            <div className="desmi-input">
              <input
                type="text"
                name="enx_ani"
                value={formData.enx_ani}
                onChange={handleChange}
              />
              <span className="desmi">Minutos</span>
            </div>
          </div>
        </div>
      </Flex>
      <p style={{ fontSize: '7px' }}>__________________________________________________________________________________________________________________________________________</p>
      <Flex>
        <div className="all-desmi">
          <label>Condutividade Final:</label>
          <div className="all-input">
            <input
              type="text"
              name="cond_fin"
              value={formData.cond_fin}
              onChange={handleChange}
            />
            <span className="all">µS/cm</span>
          </div>
          <label>Temperatura:</label>
          <div className="all-input">
            <input
              type="text"
              name="temp"
              value={formData.temp}
              onChange={handleChange}
            />
            <span className="all">°C</span>
          </div>
        </div>
        <div className="all-desmi">
          <label>N° de Série do Condutivímetro:</label>
          <input
            type="text"
            name="ser_cond"
            value={formData.ser_cond}
            onChange={handleChange}
          />
          <label>Constante:</label>
          <input
            type="text"
            name="constante"
            value={formData.constante}
            onChange={handleChange}
          />
        </div>
      </Flex>
      <p className="paragrafo">Nota²: Usar Água Descationizada para a Etapa de Enxágue do Leito Aniônico</p>
      <div>
        <button className="saveind" onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </form>
  );
}

export default Desmineralizer;
