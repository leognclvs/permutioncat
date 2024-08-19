import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Analysis.css";
import Analise from "../../../../img/análise.svg";

function Analysis() {
  const [formData, setFormData] = useState([
    {
      amostra1: "",
      cond1: "",
      ph1: "",
      temp1: "",
      cloro1: "",
      dureza1: "",
      ferro1: "",
      silica1: "",
      cor1: "",
      turbidez1: "",
      outro_par_a1: "",
      outro_par_b1: "",
      outro_par_c1: "",
      outro_par_d1: "",
    },
  ]);

  const [catNumber, setCatNumber] = useState("");
  const [cliente, setCliente] = useState("");
  const [numAnalise, setNumAnalise] = useState(1);
  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("https://permutioncat.fly.dev//catagua/");
        setAvailableCats(response.data);
      } catch (error) {
        console.error("Erro ao carregar CATs disponíveis:", error);
      }
    };

    fetchAvailableCats();
  }, []);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const newData = [...prevState];
      newData[index] = {
        ...newData[index],
        [name]: value,
      };
      return newData;
    });
  };

  const handleCatNumberChange = async (e) => {
    const { value } = e.target;
    setCatNumber(value);
    if (value) {
      try {
        const response = await axios.get(
          `https://permutioncat.fly.dev//info/${value}/`
        );
        setCliente(response.data.cliente);
      } catch (error) {
        console.error("Erro ao carregar informações do cliente:", error);
      }
    } else {
      setCliente("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mergedFormData = formData.reduce(
      (acc, curr) => {
        return { ...acc, ...curr };
      },
      { cat_number: catNumber, cliente }
    );

    try {
      await axios.post("https://permutioncat.fly.dev//analise_agua/", mergedFormData);
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados");
    }
  };

  const addAnalise = () => {
    if (numAnalise < 10) {
      setNumAnalise(numAnalise + 1);
      setFormData((prevState) => [
        ...prevState,
        {
          [`amostra${numAnalise + 1}`]: "",
          [`cond${numAnalise + 1}`]: "",
          [`ph${numAnalise + 1}`]: "",
          [`temp${numAnalise + 1}`]: "",
          [`cloro${numAnalise + 1}`]: "",
          [`dureza${numAnalise + 1}`]: "",
          [`ferro${numAnalise + 1}`]: "",
          [`silica${numAnalise + 1}`]: "",
          [`cor${numAnalise + 1}`]: "",
          [`turbidez${numAnalise + 1}`]: "",
          [`outro_par_a${numAnalise + 1}`]: "",
          [`outro_par_b${numAnalise + 1}`]: "",
          [`outro_par_c${numAnalise + 1}`]: "",
          [`outro_par_d${numAnalise + 1}`]: "",
        },
      ]);
    }
  };

  return (
    <div className="form-container">
      <div>
        <img className="start" src={Analise} alt="Análise Laboratorial" />
      </div>
      <div className="savetext">Análise Laboratorial</div>
      <form className="form">
        <div className="inputs">
          <label>Número da CAT:</label>
          <select
            name="cat_number"
            value={catNumber}
            onChange={handleCatNumberChange}
            required
            style={{ display: "block", marginBottom: "10px" }}
          >
            <option value="">Selecione</option>
            {availableCats.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <label>Cliente:</label>
          <input
            type="text"
            name="cliente"
            value={cliente}
            readOnly
            style={{ display: "block", marginBottom: "10px" }}
          />
        </div>
      </form>
      {formData.map((data, i) => (
        <form key={i} className="forms-wrapper">
          <div className="form">
            <div className="inputs">
              <label>Tipo de Amostra:</label>
              <input
                type="text"
                name={`amostra${i + 1}`}
                value={data[`amostra${i + 1}`]}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />

              <label>Condutividade:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name={`cond${i + 1}`}
                  value={data[`cond${i + 1}`]}
                  onChange={(e) => handleChange(e, i)}
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 50px)",
                    marginBottom: "10px",
                  }}
                />
                <span className="unit">µS/cm</span>
              </div>

              <label>pH:</label>
              <input
                type="text"
                name={`ph${i + 1}`}
                value={data[`ph${i + 1}`]}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />

              <label>Temperatura:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name={`temp${i + 1}`}
                  value={data[`temp${i + 1}`]}
                  onChange={(e) => handleChange(e, i)}
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 50px)",
                    marginBottom: "10px",
                  }}
                />
                <span className="unit">°C</span>
              </div>

              <label>Cloro Livre:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name={`cloro${i + 1}`}
                  value={data[`cloro${i + 1}`]}
                  onChange={(e) => handleChange(e, i)}
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 50px)",
                    marginBottom: "10px",
                  }}
                />
                <span className="unit">ppm</span>
              </div>

              <label>Dureza Total:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name={`dureza${i + 1}`}
                  value={data[`dureza${i + 1}`]}
                  onChange={(e) => handleChange(e, i)}
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 50px)",
                    marginBottom: "10px",
                  }}
                />
                <span className="unit">
                  ppm CaCO<sub>3</sub>
                </span>
              </div>

              <label>Ferro:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name={`ferro${i + 1}`}
                  value={data[`ferro${i + 1}`]}
                  onChange={(e) => handleChange(e, i)}
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 50px)",
                    marginBottom: "10px",
                  }}
                />
                <span className="unit">ppm</span>
              </div>

              <label>Sílica Solúvel:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name={`silica${i + 1}`}
                  value={data[`silica${i + 1}`]}
                  onChange={(e) => handleChange(e, i)}
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 50px)",
                    marginBottom: "10px",
                  }}
                />
                <span className="unit">ppm</span>
              </div>

              <label>Cor:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name={`cor${i + 1}`}
                  value={data[`cor${i + 1}`]}
                  onChange={(e) => handleChange(e, i)}
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 50px)",
                    marginBottom: "10px",
                  }}
                />
                <span className="unit">UH</span>
              </div>

              <label>Turbidez:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name={`turbidez${i + 1}`}
                  value={data[`turbidez${i + 1}`]}
                  onChange={(e) => handleChange(e, i)}
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 50px)",
                    marginBottom: "10px",
                  }}
                />
                <span className="unit">NTU</span>
              </div>

              <label>Outro Parâmetro (A):</label>
              <input
                type="text"
                name={`outro_par_a${i + 1}`}
                value={data[`outro_par_a${i + 1}`]}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />

              <label>Outro Parâmetro (B):</label>
              <input
                type="text"
                name={`outro_par_b${i + 1}`}
                value={data[`outro_par_b${i + 1}`]}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />

              <label>Outro Parâmetro (C):</label>
              <input
                type="text"
                name={`outro_par_c${i + 1}`}
                value={data[`outro_par_c${i + 1}`]}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />

              <label>Outro Parâmetro (D):</label>
              <input
                type="text"
                name={`outro_par_d${i + 1}`}
                value={data[`outro_par_d${i + 1}`]}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />
            </div>
          </div>
        </form>
      ))}
      <div style={{ display: "flex", marginLeft: "2%", marginBottom: "2%" }}>
        <button
          className="saveind"
          style={{ marginRight: "1%" }}
          type="button"
          onClick={addAnalise}
        >
          Adicionar Análise
        </button>
        <button className="saveind" onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Analysis;
