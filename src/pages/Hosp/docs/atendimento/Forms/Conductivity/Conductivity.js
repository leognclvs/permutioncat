import "./Conductivity.css";
import Condutivimetro from "../../img/condutivimetro.svg";
import React, { useState } from "react";
import axios from "axios";  // Importando Axios

function Conductivity() {
  const [modelo, setModelo] = useState("");
  const [constante, setConstante] = useState("");
  const [loteSolucao, setLoteSolucao] = useState("");
  const [condutividadeSolucao, setCondutividadeSolucao] = useState("");
  const [temperaturaSolucao, setTemperaturaSolucao] = useState("");
  const [marcaSolucao, setMarcaSolucao] = useState("");
  const [condutividadeAferida, setCondutividadeAferida] = useState("");
  const [temperaturaAferida, setTemperaturaAferida] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      modelo,
      constante,
      loteSolucao,
      condutividadeSolucao,
      temperaturaSolucao,
      marcaSolucao,
      condutividadeAferida,
      temperaturaAferida,
    };

    try {
      const response = await axios.post("YOUR_API_ENDPOINT_HERE", data);
      console.log("Dados enviados com sucesso:", response.data);
      // Lidar com resposta positiva, como limpar o formulário ou mostrar uma mensagem de sucesso
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      // Lidar com erros, como mostrar uma mensagem de erro para o usuário
    }
  };

  return (
    <div className="form">
      <div>
        <img className="conductivity" src={Condutivimetro} alt="Aferição Condutivímetro" />
      </div>
      <div className="conductivitytext">Aferição do Condutivímetro</div>
      <form onSubmit={handleSubmit} className="conduct-input">
        <div className="conduct">
          <label htmlFor="modelo-condutivimetro">Modelo do Condutivímetro:</label>
          <input
            type="text"
            id="modelo-condutivimetro"
            name="modelo-condutivimetro"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>
        <div className="conduct">
          <label htmlFor="constante">Constante:</label>
          <input
            type="text"
            id="constante"
            name="constante"
            value={constante}
            onChange={(e) => setConstante(e.target.value)}
          />
        </div>
        <div className="conduct">
          <label htmlFor="lote-solucao">n° do Lote da Solução Padrão de Condutividade:</label>
          <input
            type="text"
            id="lote-solucao"
            name="lote-solucao"
            value={loteSolucao}
            onChange={(e) => setLoteSolucao(e.target.value)}
          />
        </div>
        <div className="conduct">
          <label htmlFor="condutividade-solucao">Condutividade da Solução Padrão:</label>
          <input
            type="text"
            id="condutividade-solucao"
            name="condutividade-solucao"
            value={condutividadeSolucao}
            onChange={(e) => setCondutividadeSolucao(e.target.value)}
          />
        </div>
        <div className="conduct">
          <label htmlFor="temperatura-solucao">Temperatura da Solução Padrão:</label>
          <input
            type="text"
            id="temperatura-solucao"
            name="temperatura-solucao"
            value={temperaturaSolucao}
            onChange={(e) => setTemperaturaSolucao(e.target.value)}
          />
        </div>
        <div className="conduct">
          <label htmlFor="marca-solucao">Marca da Solução Padrão de Condutividade:</label>
          <input
            type="text"
            id="marca-solucao"
            name="marca-solucao"
            value={marcaSolucao}
            onChange={(e) => setMarcaSolucao(e.target.value)}
          />
        </div>
        <div className="conduct">
          <label htmlFor="condutividade-aferida">Condutividade Aferida:</label>
          <input
            type="text"
            id="condutividade-aferida"
            name="condutividade-aferida"
            value={condutividadeAferida}
            onChange={(e) => setCondutividadeAferida(e.target.value)}
          />
        </div>
        <div className="conduct">
          <label htmlFor="temperatura-aferida">Temperatura Aferida:</label>
          <input
            type="text"
            id="temperatura-aferida"
            name="temperatura-aferida"
            value={temperaturaAferida}
            onChange={(e) => setTemperaturaAferida(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default Conductivity;
