import "./Desmineralizer.css";
import Desmineralizador from "../../img/desmineralizador.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Flex from "../../../../../../components/Flex";

function Desmineralizer() {
  const [formData, setFormData] = useState({
    frcl_cat: "",
    tr_cat: "",
    te_cat: "",
    pre_enx_cat: "",
    enx_cat: "",
    frcl_ani: "",
    tr_ani: "",
    te_ani: "",
    pre_enx_ani: "",
    enx_ani: "",
    cond_final: "",
    temp: "",
    num_serie: "",
    enx_temp: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sua-api.com/desmineralizer-data');
        setFormData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="desmi-form">
      <div>
        <img className="desmineralizer" src={Desmineralizador} alt="desmineralizador" />
      </div>
      <div className="startext">Sistema Desmineralizador</div>
      <Flex>
        <div className="griddesmi">
          <div>
            <label>Frequência/Ciclo - Catiônica:</label>
            <input
              type="text"
              name="frcl_cat"
              value={formData.frcl_cat}
              onChange={handleChange}
            />

            <div className="input-desmi">
              <label>Tempo de Retrolavagem:</label>
              <div className="desmi-input">
                <input
                  type="text"
                  name="tr_cat"
                  value={formData.tr_cat}
                  onChange={handleChange}
                />
                <span className="desmi">Minutos</span>
              </div>
            </div>

            <div className="input-desmi">
              <label>Tempo de Sucção:</label>
              <div className="desmi-input">
                <input
                  type="text"
                  name="te_cat"
                  value={formData.te_cat}
                  onChange={handleChange}
                />
                <span className="desmi">Minutos</span>
              </div>
            </div>

            <div className="input-desmi">
              <label>Tempo de Pré-Enxágue (somente DG 40.000):</label>
              <div className="desmi-input">
                <input
                  type="text"
                  name="pre_enx_cat"
                  value={formData.pre_enx_cat}
                  onChange={handleChange}
                />
                <span className="desmi">Minutos</span>
              </div>
            </div>

            <div className="input-desmi">
              <label>Tempo de Enxágue:</label>
              <div className="desmi-input">
                <input
                  type="text"
                  name="enx_cat"
                  value={formData.enx_cat}
                  onChange={handleChange}
                />
                <span className="desmi">Minutos</span>
              </div>
            </div>
          </div>
        </div>
        <div className="griddesmi">
          <div>
            <label>Frequência/Ciclo - Aniônica:</label>
            <input
              type="text"
              name="frcl_ani"
              value={formData.frcl_ani}
              onChange={handleChange}
            />

            <div className="input-desmi">
              <label>Tempo de Retrolavagem:</label>
              <div className="desmi-input">
                <input
                  type="text"
                  name="tr_ani"
                  value={formData.tr_ani}
                  onChange={handleChange}
                />
                <span className="desmi">Minutos</span>
              </div>
            </div>

            <div className="input-desmi">
              <label>Tempo de Sucção:</label>
              <div className="desmi-input">
                <input
                  type="text"
                  name="te_ani"
                  value={formData.te_ani}
                  onChange={handleChange}
                />
                <span className="desmi">Minutos</span>
              </div>
            </div>

            <div className="input-desmi">
              <label>Tempo de Pré-Enxágue (somente DG 40.000):</label>
              <div className="desmi-input">
                <input
                  type="text"
                  name="pre_enx_ani"
                  value={formData.pre_enx_ani}
                  onChange={handleChange}
                />
                <span className="desmi">Minutos</span>
              </div>
            </div>

            <div className="input-desmi">
              <label>Tempo de Enxágue:</label>
              <div className="desmi-input">
                <input
                  type="text"
                  name="enx_ani"
                  value={formData.enx_ani}
                  onChange={handleChange}
                />
                <span className="desmi">Minutos</span>
              </div>
            </div>
          </div>
        </div>
      </Flex>
      <p style={{fontSize: '7px'}}>__________________________________________________________________________________________________________________________________________</p>
      <Flex>
        <div className="all-desmi">
          <label>Condutividade Final:</label>
          <div className="all-input">
            <input
              type="text"
              name="cond_final"
              value={formData.cond_final}
              onChange={handleChange}
            />
            <span className="all">µS/cm</span>
          </div>
          <label>Temperatura:</label>
          <div className="all-input">
            <input
              type="text"
              name="temp"
              value={formData.temp}
              onChange={handleChange}
            />
            <span className="all">°C</span>
          </div>
        </div>
        <div className="all-desmi">
          <label>N° de Série do Condutivímetro:</label>
          <input
            type="text"
              name="num_serie"
              value={formData.num_serie}
              onChange={handleChange}
          />
          <label>Tempo de Enxágue:</label>
          <input
            type="text"
            name="enx_temp"
            value={formData.enx_temp}
            onChange={handleChange}
          />
        </div>
      </Flex>
      <p className="paragrafo">Nota²: Usar Água Descationizada para a Etapa de Enxágue do Leito Aniônico</p>
    </div>
  );
}

export default Desmineralizer;
