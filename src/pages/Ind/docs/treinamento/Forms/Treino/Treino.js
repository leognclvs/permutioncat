import "./Treino.css";
import Certificado from "../../../../img/certificado.svg";
import SignatureCanvas from 'react-signature-canvas';
import React, { useRef } from 'react';

function Training() {
  const sigCanvas = useRef(null);

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  return (
    <div className="form">
      <div>
        <img className="treino" src={Certificado} alt="instalacao" />
      </div>
      <div className="startext">Certificado de Treinamento</div>
      <div className="certif">
        <label>Nome:</label>
        <input
          type="text"
          className="certifinput"
          name="tr_areia"
          value={""}
          onChange={(e) => ""(e.target.value)}
        />
        <label>CPF:</label>
        <input
          type="text"
          className="certifinput"
          name="tr_areia"
          value={""}
          onChange={(e) => ""(e.target.value)}
        />
        <label>Curso:</label>
        <input
          type="text"
          className="certifinput"
          name="tr_areia"
          value={""}
          onChange={(e) => ""(e.target.value)}
        />
        <label>Data:</label>
        <input
          type="date"
          className="data"
          name="tr_areia"
          value={""}
          onChange={(e) => ""(e.target.value)}
        />
      </div>
      <div>
        <SignatureCanvas 
          ref={sigCanvas}
          canvasProps={{className: 'sigCanvas' }}
        />
      </div>
      <div>
        <button className="clear" type="button" onClick={clearSignature}>Limpar Assinatura</button>
      </div>
    </div>
  );
}

export default Training;
