import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Analysis.css";
import Analise from "../../../../img/análise.svg";

function Analysis() {
  const [forms, setForms] = useState([{
    tr_areia: "",
    condutividade: "",
    ph: "",
    temperatura: "",
    cloroLivre: "",
    outroParametro1: "",
    outroParametro2: "",
    durezaTotal: "",
    ferro: "",
    siliceSoluvel: "",
    cor: "",
    turbidez: "",
    outroParametro3: "",
    outroParametro4: ""
  }]);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    axios.get('YOUR_API_ENDPOINT')
      .then(response => {
        // Initialize forms if needed
        // setForms(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newForms = [...forms];
    newForms[index] = {
      ...newForms[index],
      [name]: value
    };
    setForms(newForms);
  };

  const addForm = () => {
    setForms([...forms, {
      tr_areia: "",
      condutividade: "",
      ph: "",
      temperatura: "",
      cloroLivre: "",
      outroParametro1: "",
      outroParametro2: "",
      durezaTotal: "",
      ferro: "",
      siliceSoluvel: "",
      cor: "",
      turbidez: "",
      outroParametro3: "",
      outroParametro4: ""
    }]);
  };

  return (
    <div className="form-container">
      <div>
        <img className="start" src={Analise} alt="" />
      </div>
      <div className="savetext">Análise Laboratorial
      <button className='savelab' type="button" onClick={addForm}>Adicionar Novo Formulário</button>
      </div>
      <div className="forms-wrapper">
        {forms.map((form, index) => (
          <div key={index} className="form">
            <div className="inputs">
              <label>Tipo de Amostra:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name="tr_areia"
                  value={form.tr_areia}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div className="input-with-unit">
                <label>Condutividade:</label>
                <div className="unit-input">
                  <input
                    type="text"
                    name="condutividade"
                    value={form.condutividade}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <span className="unit">µS/cm</span>
                </div>
              </div>

              <label>pH:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name="ph"
                  value={form.ph}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div className="input-with-unit">
                <label>Temperatura:</label>
                <div className="unit-input">
                  <input
                    type="text"
                    name="temperatura"
                    value={form.temperatura}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <span className="unit">°C</span>
                </div>
              </div>

              <div className="input-with-unit">
                <label>Cloro Livre:</label>
                <div className="unit-input">
                  <input
                    type="text"
                    name="cloroLivre"
                    value={form.cloroLivre}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <span className="unit">ppm</span>
                </div>
              </div>

              <label>Outro Parâmetro:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name="outroParametro1"
                  value={form.outroParametro1}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <label>Outro Parâmetro:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name="outroParametro2"
                  value={form.outroParametro2}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div className="input-with-unit">
                <label>Dureza Total:</label>
                <div className="unit-input">
                  <input
                    type="text"
                    name="durezaTotal"
                    value={form.durezaTotal}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <span className="unit">ppm CaCo³</span>
                </div>
              </div>

              <div className="input-with-unit">
                <label>Ferro:</label>
                <div className="unit-input">
                  <input
                    type="text"
                    name="ferro"
                    value={form.ferro}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <span className="unit">ppm</span>
                </div>
              </div>

              <div className="input-with-unit">
                <label>Sílica Solúvel:</label>
                <div className="unit-input">
                  <input
                    type="text"
                    name="siliceSoluvel"
                    value={form.siliceSoluvel}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <span className="unit">ppm</span>
                </div>
              </div>

              <div className="input-with-unit">
                <label>Cor:</label>
                <div className="unit-input">
                  <input
                    type="text"
                    name="cor"
                    value={form.cor}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <span className="unit">°H</span>
                </div>
              </div>

              <div className="input-with-unit">
                <label>Turbidez:</label>
                <div className="unit-input">
                  <input
                    type="text"
                    name="turbidez"
                    value={form.turbidez}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <span className="unit">NTU</span>
                </div>
              </div>

              <label>Outro Parâmetro:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name="outroParametro3"
                  value={form.outroParametro3}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <label>Outro Parâmetro:</label>
              <div className="input-with-unit">
                <input
                  type="text"
                  name="outroParametro4"
                  value={form.outroParametro4}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analysis;
