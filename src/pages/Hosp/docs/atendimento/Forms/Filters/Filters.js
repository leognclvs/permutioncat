import "./Filters.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Filtro from "../../img/filtro.svg";
import Flex from '../../../../../../components/Flex';

function Filters() {
  const [areiaEnabled, setAreiaEnabled] = useState(true);
  const [carvaoEnabled, setCarvaoEnabled] = useState(true);
  const [abrandadorEnabled, setAbrandadorEnabled] = useState(true);
  const [formData, setFormData] = useState({
    frcl_areia: "",
    tr_areia: "",
    te_areia: "",
    frcl_carvao: "",
    tr_carvao: "",
    te_carvao: "",
    frcl_abrandador: "",
    tr_abrandador: "",
    te_abrandador: "",
    tp_pre_enx: "",
    tp_enx: "",
    tp_rep: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sua-api.com/filter-data');
        setFormData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxAreia = (event) => {
    setAreiaEnabled(event.target.checked);
  };

  const handleCheckboxCarvao = (event) => {
    setCarvaoEnabled(event.target.checked);
  };

  const handleCheckboxAbrandador = (event) => {
    setAbrandadorEnabled(event.target.checked);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <div>
        <img className="filter" src={Filtro} alt="instalacao" />
      </div>
      <div className="startext">Filtros</div>
      <Flex>
        <div className="gridfilter">
          <label className="switch" style={{ display: "flex" }}>
            <input
              type="checkbox"
              checked={areiaEnabled}
              onChange={handleCheckboxAreia}
            />
            <span className="slider round"></span>
            <span className="text-slider">Areia/Zeólita</span>
          </label>
          <div className={`form-section ${areiaEnabled ? 'open' : ''}`}>
            <label>Frequência/Ciclo Areia/Zeólita:</label>
            <input
              type="text"
              name="frcl_areia"
              value={formData.frcl_areia}
              onChange={handleChange}
            />

            <div className="input-with-unit">
              <label>Tempo de Retrolavagem:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="tr_areia"
                  value={formData.tr_areia}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>

            <div className="input-with-unit">
              <label>Tempo de Enxágue:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="te_areia"
                  value={formData.te_areia}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gridfilter">
          <label className="switch" style={{ display: "flex" }}>
            <input
              type="checkbox"
              checked={carvaoEnabled}
              onChange={handleCheckboxCarvao}
            />
            <span className="slider round"></span>
            <span className="text-slider">Carvão</span>
          </label>
          <div className={`form-section ${carvaoEnabled ? 'open' : ''}`}>
            <label>Frequência/Ciclo Carvão:</label>
            <input
              type="text"
              name="frcl_carvao"
              value={formData.frcl_carvao}
              onChange={handleChange}
            />

            <div className="input-with-unit">
              <label>Tempo de Retrolavagem:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="tr_carvao"
                  value={formData.tr_carvao}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>

            <div className="input-with-unit">
              <label>Tempo de Enxágue:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="te_carvao"
                  value={formData.te_carvao}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gridfilter">
          <label className="switch" style={{ display: "flex" }}>
            <input
              type="checkbox"
              checked={abrandadorEnabled}
              onChange={handleCheckboxAbrandador}
            />
            <span className="slider round"></span>
            <span className="text-slider">Abrandador</span>
          </label>
          <div className={`form-section ${abrandadorEnabled ? 'open' : ''}`}>
            <label>Frequência/Ciclo Abrandador:</label>
            <input
              type="text"
              name="frcl_abrandador"
              value={formData.frcl_abrandador}
              onChange={handleChange}
            />

            <div className="input-with-unit">
              <label>Tempo de Retrolavagem:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="tr_abrandador"
                  value={formData.tr_abrandador}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>

            <div className="input-with-unit">
              <label>Tempo de Sucção:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="te_abrandador"
                  value={formData.te_abrandador}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>

            <div className="input-with-unit">
              <label>Tempo de Pré-Enxágue (somente DG 40.000):</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="tp_pre_enx"
                  value={formData.tp_pre_enx}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>

            <div className="input-with-unit">
              <label>Tempo de Enxágue:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="tp_enx"
                  value={formData.tp_enx}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>

            <div className="input-with-unit">
              <label>Tempo de Reposição:</label>
              <div className="unit-input">
                <input
                  type="text"
                  name="tp_rep"
                  value={formData.tp_rep}
                  onChange={handleChange}
                />
                <span className="unit">Minutos</span>
              </div>
            </div>
          </div>
        </div>
      </Flex>
      <p className="paragrafo">Nota¹: Tempos recomendados de contato das soluções: 30' (Mínimo); 45' (Médio); 60' (Máximo)</p>
    </div>
  );
}

export default Filters;
