import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Tecnicos.css";
import Schedule from "../../components/Header/schedule.svg";
import SignatureCanvas from "react-signature-canvas";

function Analysis() {
  const [formData, setFormData] = useState([
    {
      obs_tecnicas: "",
      pendencias: "",
      data_at: "",
      hora_cheg: "",
      hora_sai: "",
      assinatura1: "",
      assinatura2: "",
    },
  ]);

  const [catNumber, setCatNumber] = useState("");
  const [cliente, setCliente] = useState("");
  const [dataAtendimento, setDataAtendimento] = useState(1);
  const [availableCats, setAvailableCats] = useState([]);
  const sigCanvas1 = useRef(null);
  const sigCanvas2 = useRef(null);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("https://permutioncat.fly.dev/cattec/");
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

    const signatures = {
      assinatura1: sigCanvas1.current
        ? sigCanvas1.current.getTrimmedCanvas().toDataURL("image/png")
        : "",
      assinatura2: sigCanvas2.current
        ? sigCanvas2.current.getTrimmedCanvas().toDataURL("image/png")
        : "",
    };

    const mergedFormData = {
      ...formData[0], // assuming there's only one formData entry
      ...signatures,
      cat_number: catNumber,
      cliente,
    };

    try {
      await axios.post(
        "https://permutioncat.fly.dev/tecnicos/",
        mergedFormData
      );
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados");
    }
  };

  const addData = () => {
    if (dataAtendimento < 14) {
      setDataAtendimento(dataAtendimento + 1);
      setFormData((prevState) => [
        ...prevState,
        {
          obs_tecnicas: "",
          pendencias: "",
          data_at: "",
          hora_cheg: "",
          hora_sai: "",
        },
      ]);
    }
  };

  const clearSignature1 = () => {
    sigCanvas1.current.clear();
  };

  const clearSignature2 = () => {
    sigCanvas2.current.clear();
  };

  return (
    <div className="tec-cont">
      <div>
        <img className="services" src={Schedule} alt="Análise Laboratorial" />
      </div>
      <div className="savetext">Parte Técnica</div>
      <form className="form-tec" onSubmit={handleSubmit}>
        <div className="tecnicos">
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

        {formData.map((data, i) => (
          <div key={i} className="form">
            <div className="forms-tec">
              <label>Data de Atendimento:</label>
              <input
                type="text"
                name={`data_at${i + 1}`}
                value={data.data_at}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />

              <label>Hora de Chegada:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name={`hora_cheg${i + 1}`}
                  value={data.hora_cheg}
                  onChange={(e) => handleChange(e, i)}
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 50px)",
                    marginBottom: "10px",
                  }}
                />
              </div>

              <label>Hora de Saída:</label>
              <input
                type="text"
                name={`hora_sai${i + 1}`}
                value={data.hora_sai}
                onChange={(e) => handleChange(e, i)}
                style={{ display: "block", marginBottom: "10px" }}
              />
            </div>
          </div>
        ))}

        {dataAtendimento < 14 && (
          <div style={{ display: "flex", marginLeft: "2%", marginBottom: "2%" }}>
            <button
              className="saveind"
              style={{ marginRight: "1%" }}
              type="button"
              onClick={addData}
            >
              Adicionar Data
            </button>
          </div>
        )}

        <label>Observações Técnicas:</label>
        <textarea
          className="font-ordem"
          name="obs_tecnicas"
          value={formData[0].obs_tecnicas}
          onChange={(e) => handleChange(e, 0)}
        ></textarea>

        <label>Pendências:</label>
        <textarea
          className="font-ordem"
          name="pendencias"
          value={formData[0].pendencias}
          onChange={(e) => handleChange(e, 0)}
        ></textarea>

        <div>
          <label>Assinatura Técnico Permution:</label>
          <SignatureCanvas
            ref={sigCanvas1}
            canvasProps={{ className: "sigCanvas" }}
          />
          <button
            style={{ marginRight: "1%", marginTop: "10px" }}
            className="saveind"
            type="button"
            onClick={clearSignature1}
          >
            Limpar Assinatura
          </button>
        </div>

        <div>
          <label>Assinatura Cliente:</label>
          <SignatureCanvas
            ref={sigCanvas2}
            canvasProps={{ className: "sigCanvas" }}
          />
          <button
            style={{ marginRight: "1%", marginTop: "10px" }}
            className="saveind"
            type="button"
            onClick={clearSignature2}
          >
            Limpar Assinatura
          </button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button className="saveind" type="submit">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Analysis;
