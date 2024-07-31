import "./Treino.css";
import Certificado from "../../../../img/certificado.svg";
import SignatureCanvas from 'react-signature-canvas';
import React, { useRef } from 'react';

function Start() {

  const sigCanvas = useRef(null);

  return (
    <div class="form">
      <div>
        <img className="treino" src={Certificado} alt="instalacao" />
      </div>
      <div class="startext">Certificado de Treinamento</div>
      <div class="certif">
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
        <div>
        <SignatureCanvas 
          ref={sigCanvas}
          canvasProps={{className: 'sigCanvas' }}
        />
      </div>
        </div>
    </div>
  );
}

export default Start;
