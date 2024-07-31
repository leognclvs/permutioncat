import "./Cat.css";
import Controle from '../../../../img/cat.svg';
import React, { useEffect, useState } from "react";
import axios from 'axios';

function Cat() {
  const [formData, setFormData] = useState({
    data: '',
    cat: '',
    codigoCliente: '',
    cliente: '',
    codigoEquipamento: '',
    equipamento: '',
    contatoCliente: '',
    cep: '',
    endereco: '',
    numero: '',
    cidade: '',
    estado: '',
    responsavelPermution: '',
    tecnicoResponsavel: '',
    preReq: '',
    matInt: '',
    preFlu: '',
    preTrat: '',
    valv: '',
    locMemb: '',
    alarm: '',
    insCoe: '',
    sisSeg: '',
    agua: '',
    materialDisponibilizado: '',
    servicoExecutado: '',
    sistemaSeguranca: '',
    equipamentoOperando: '',
    leituraCoerente: '',
    amostraAgua: '',
    pressaoAlimentacao: '',
    funcionamentoCorreto: '',
    frcl_areia: '',
    tr_areia: '',
    te_areia: '',
    frcl_carvao: '',
    tr_carvao: '',
    te_carvao: '',
    frcl_abrandador: '',
    tr_abrandador: '',
    te_abrandador: '',
    tp_pre_enx: '',
    tp_enx: '',
    tp_rep: '',
    produto_dosado1: '',
    concentracao_solucao1: '',
    volume_solucao1: '',
    aferir_dosadora: '',
    produto_dosado2: '',
    concentracao_solucao2: '',
    volume_solucao2: '',
    padrao_utilizado: '',
    info_padrao: '',
    frcl_cat: '',
    tr_cat: '',
    te_cat: '',
    pre_enx_cat: '',
    enx_cat: '',
    frcl_ani: '',
    tr_ani: '',
    te_ani: '',
    pre_enx_ani: '',
    enx_ani: '',
    cond_final: '',
    temp: '',
    num_serie: '',
    enx_temp: ''
  });

  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");

  useEffect(() => {
    // Fetch available CATs
    axios.get('/api/cats').then(response => {
      setCats(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCat) {
      axios.get(`/api/cats/${selectedCat}`).then(response => {
        setFormData(response.data);
      });
    }
  }, [selectedCat]);

  const markAsPrinted = () => {
    axios.post(`/api/cats/${selectedCat}/printed`).then(response => {
      setCats(cats.filter(cat => cat.id !== selectedCat));
      setSelectedCat("");
      setFormData({
        data: '',
        cat: '',
        codigoCliente: '',
        cliente: '',
        codigoEquipamento: '',
        equipamento: '',
        contatoCliente: '',
        cep: '',
        endereco: '',
        numero: '',
        cidade: '',
        estado: '',
        responsavelPermution: '',
        tecnicoResponsavel: '',
        preReq: '',
        matInt: '',
        preFlu: '',
        preTrat: '',
        valv: '',
        locMemb: '',
        alarm: '',
        insCoe: '',
        sisSeg: '',
        agua: '',
        materialDisponibilizado: '',
        servicoExecutado: '',
        sistemaSeguranca: '',
        equipamentoOperando: '',
        leituraCoerente: '',
        amostraAgua: '',
        pressaoAlimentacao: '',
        funcionamentoCorreto: '',
        frcl_areia: '',
        tr_areia: '',
        te_areia: '',
        frcl_carvao: '',
        tr_carvao: '',
        te_carvao: '',
        frcl_abrandador: '',
        tr_abrandador: '',
        te_abrandador: '',
        tp_pre_enx: '',
        tp_enx: '',
        tp_rep: '',
        produto_dosado1: '',
        concentracao_solucao1: '',
        volume_solucao1: '',
        aferir_dosadora: '',
        produto_dosado2: '',
        concentracao_solucao2: '',
        volume_solucao2: '',
        padrao_utilizado: '',
        info_padrao: '',
        frcl_cat: '',
        tr_cat: '',
        te_cat: '',
        pre_enx_cat: '',
        enx_cat: '',
        frcl_ani: '',
        tr_ani: '',
        te_ani: '',
        pre_enx_ani: '',
        enx_ani: '',
        cond_final: '',
        temp: '',
        num_serie: '',
        enx_temp: ''
      });
    });
  };

  return (
    <div className="osmose-form">
      <div>
        <img className="osmosis" src={Controle} alt="osmose" />
      </div>
      <div className="startext">Controle de Atendimento Técnico - CAT</div>
      <div className="select-cat">
        <label htmlFor="select-cat">Selecione a CAT</label>
        <select
          id="select-cat"
          value={selectedCat}
          onChange={(e) => setSelectedCat(e.target.value)}
        >
          <option value="">Selecione</option>
          {cats.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <button onClick={markAsPrinted}>Já impresso</button>
      </div>
      <div className="form-section">
        <h2>Instalação, Start-up e Garantia</h2>
        <div className="row">
          <div className="col">
            <label>Campo1</label>
            <input value={formData.start1} readOnly />
          </div>
          <div className="col">
            <label>Campo2</label>
            <input value={formData.start2} readOnly />
          </div>
          <div className="col">
            <label>Campo3</label>
            <input value={formData.start3} readOnly />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Campo4</label>
            <input value={formData.start4} readOnly />
          </div>
          <div className="col">
            <label>Campo5</label>
            <input value={formData.start5} readOnly />
          </div>
          <div className="col">
            <label>Campo6</label>
            <input value={formData.start6} readOnly />
          </div>
        </div>
        {/* Repeat similar structure for other sections */}
        {/* Example for the next section */}
        <h2>Serviços</h2>
        <div className="row">
          <div className="col">
            <label>Campo1</label>
            <input value={formData.services1} readOnly />
          </div>
          <div className="col">
            <label>Campo2</label>
            <input value={formData.services2} readOnly />
          </div>
          <div className="col">
            <label>Campo3</label>
            <input value={formData.services3} readOnly />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Campo4</label>
            <input value={formData.services4} readOnly />
          </div>
          <div className="col">
            <label>Campo5</label>
            <input value={formData.services5} readOnly />
          </div>
          <div className="col">
            <label>Campo6</label>
            <input value={formData.services6} readOnly />
          </div>
        </div>
        {/* Add similar structure for all other sections */}
      </div>
      <button onClick={() => window.print()}>Imprimir</button>
    </div>
  );
}

export default Cat;
