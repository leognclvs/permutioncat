import "./MixedBed.css";
import Leito from "../../img/leito.svg";
import React, { useState } from "react";

function MixedBed() {
  const [condutividade, setCondutividade] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [numeroSerie, setNumeroSerie] = useState("");
  const [constante, setConstante] = useState("");

  return (
    <div className="form">
      <div>
        <img className="mixedbed" src={Leito} alt="Leito Misto" />
      </div>
      <div className="mixedbedtext">Leito Misto Polidor</div>
      <div className="mixed-input">
        <div className="midex">
          <label htmlFor="condutividade-final">Condutividade Final:</label>
          <div className="unit-input">
            <input
              type="text"
              id="condutividade-final"
              name="condutividade-final"
              value={condutividade}
              onChange={(e) => setCondutividade(e.target.value)}
            />
            <span className="mix">µS/cm</span>
          </div>
        </div>
        <div className="midex">
          <label htmlFor="temperatura">Temperatura:</label>
          <div className="unit-input">
            <input
              type="text"
              id="temperatura"
              name="temperatura"
              value={temperatura}
              onChange={(e) => setTemperatura(e.target.value)}
            />
            <span className="mix">°C</span>
          </div>
        </div>
        <div className="midex">
          <label htmlFor="numero-serie-condutivimetro">N° de Série do Condutivímetro:</label>
          <input
            type="text"
            id="numero-serie-condutivimetro"
            name="numero-serie-condutivimetro"
            value={numeroSerie}
            onChange={(e) => setNumeroSerie(e.target.value)}
          />
        </div>
        <div className="midex">
          <label htmlFor="constante">Constante:</label>
          <input
            type="text"
            id="constante"
            name="constante"
            value={constante}
            onChange={(e) => setConstante(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default MixedBed;
