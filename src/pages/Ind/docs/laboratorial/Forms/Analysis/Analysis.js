import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Analysis.css";
import Analise from "../../../../img/análise.svg";

function Analysis() {
  const [formData, setFormData] = useState([
    {
      amostra: "",
      cond: "",
      ph: "",
      temp: "",
      cloro: "",
      dureza: "",
      ferro: "",
      silica: "",
      cor: "",
      turbidez: "",
      outro_par_a: "",
      outro_par_b: "",
      outro_par_c: "",
      outro_par_d: "",
    },
  ]);

  const [catNumber, setCatNumber] = useState("");
  const [cliente, setCliente] = useState("");
  const [numAnalise, setNumAnalise] = useState(1);
  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("https://permutioncat.fly.dev/catagua/");
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
          `https://permutioncat.fly.dev/info/${value}/`
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
      await axios.post("https://permutioncat.fly.dev/analise_agua/", mergedFormData);
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
          amostra: "",
          cond: "",
          ph: "",
          temp: "",
          cloro: "",
          dureza: "",
          ferro: "",
          silica: "",
          cor: "",
          turbidez: "",
          outro_par_a: "",
          outro_par_b: "",
          outro_par_c: "",
          outro_par_d: "",
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
                name="amostra"
                value={data.amostra}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />

              <label>Condutividade:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name="cond"
                  value={data.cond}
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
                name="ph"
                value={data.ph}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />

              <label>Temperatura:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name="temp"
                  value={data.temp}
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
                  name="cloro"
                  value={data.cloro}
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
                  name="dureza"
                  value={data.dureza}
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
                  name="ferro"
                  value={data.ferro}
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
                  name="silica"
                  value={data.silica}
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
                  name="cor"
                  value={data.cor}
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
                  name="turbidez"
                  value={data.turbidez}
                  onChange={(e) => handleChange(e, i)}
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 50px)",
                    marginBottom: "10px",
                  }}
                />
                <span className="unit">UNT</span>
              </div>

              <label>Outro parâmetro A:</label>
              <input
                type="text"
                name="outro_par_a"
                value={data.outro_par_a}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />

              <label>Outro parâmetro B:</label>
              <input
                type="text"
                name="outro_par_b"
                value={data.outro_par_b}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />

              <label>Outro parâmetro C:</label>
              <input
                type="text"
                name="outro_par_c"
                value={data.outro_par_c}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />

              <label>Outro parâmetro D:</label>
              <input
                type="text"
                name="outro_par_d"
                value={data.outro_par_d}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />
            </div>
          </div>
        </form>
      ))}
      <div className="button-wrapper">
        <button type="button" onClick={addAnalise}>
          Adicionar Análise
        </button>
        <button type="submit" onClick={handleSubmit}>
          Salvar Dados
        </button>
      </div>
    </div>
  );
}

export default Analysis;
