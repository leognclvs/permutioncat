import React, { useState, useRef } from "react";
import axios from "axios";
import InputMask from 'react-input-mask';
import "./Treino.css";
import Certificado from "../../../../img/certificado.svg";
import SignatureCanvas from "react-signature-canvas";

function Training() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [curso, setCurso] = useState("");
  const [data, setData] = useState("");
  const sigCanvas = useRef(null);

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const validateCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11) return false;
    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  };

  const handleSubmit = async () => {
    if (!validateCPF(cpf)) {
      alert("CPF inválido");
      return;
    }

    const signature = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("cpf", cpf);
    formData.append("curso", curso);
    formData.append("data", data);
    formData.append("assinatura", dataURLtoFile(signature, "signature.png"));

    try {
      await axios.post("http://127.0.0.1:8000/treinamento/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Certificado salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar certificado:", error);
      alert("Erro ao salvar certificado");
    }
  };

  const dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
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
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label>CPF:</label>
        <InputMask
          mask="999.999.999-99"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        >
          {(inputProps) => <input {...inputProps} className="certifinput" />}
        </InputMask>
        <label>Curso:</label>
        <input
          type="text"
          className="certifinput"
          name="curso"
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
        />
        <label>Data:</label>
        <input
          type="date"
          className="data"
          name="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div>
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{ className: "sigCanvas" }}
        />
      </div>
      <div style={{ display: "flex", marginLeft: "1%", marginBottom: "2%" }}>
        <button style={{marginRight: '1%'}} className="saveind" type="button" onClick={clearSignature}>
          Limpar Assinatura
        </button>
        <button className="saveind" type="button" onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Training;
