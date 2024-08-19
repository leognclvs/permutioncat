import "./Osmosis.css";
import Osmose from "../../img/osmose.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Flex from "../../../../../../components/Flex"; // Certifique-se de ajustar o caminho para o componente Flex

function Osmosis() {
  const [formData, setFormData] = useState({
    tipo_sist: "",
    cat_number: "",
    cliente: "",
    vaz_alim: "",
    p_in_big: "",
    p_out_big: "",
    p_in_m1: "",
    p_out_m1: "",
    p_in_m2: "",
    p_out_m2: "",
    vaz_pr1: "",
    vaz_rj1: "",
    vaz_rc1: "",
    vaz_pr2: "",
    vaz_rc2: "",
    cond_final: "",
    temp_osm: "",
    vaz_alim2: "",
    p_in_big2: "",
    p_out_big2: "",
    p_in_m12: "",
    p_out_m12: "",
    p_in_m22: "",
    p_out_m22: "",
    vaz_pr12: "",
    vaz_rj12: "",
    vaz_rc12: "",
    vaz_pr22: "",
    vaz_rc22: "",
    cond_final2: "",
    temp_osm2: "",
    horas_tr: "",
    teste_press: "",
    teste_agua: "",
    ser_cond_osm: "",
    constante_osm: "",
  });

  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("https://permutioncat.fly.dev/catosmose/");
        setAvailableCats(response.data);
      } catch (error) {
        console.error("Erro ao carregar CATs disponíveis:", error);
      }
    };

    fetchAvailableCats();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Se o campo alterado for "cat_number", busque as informações do cliente
    if (name === "cat_number") {
      fetchClientData(value);
    }
  };

  const fetchClientData = async (catNumber) => {
    try {
      const response = await axios.get(
        `https://permutioncat.fly.dev/info/${catNumber}/`
      );
      setFormData((prevState) => ({
        ...prevState,
        cliente: response.data.cliente,
      }));
    } catch (error) {
      console.error("Erro ao carregar informações do cliente:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://permutioncat.fly.dev/osmose/", formData);
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados");
    }
  };

  return (
    <div className="osmose-form">
      <div>
        <img className="osmosis" src={Osmose} alt="osmose" />
      </div>
      <div className="servicestext">Sistema de Osmose Reversa</div>
      <div>
        <label>Equipamento</label>
        <select className="equiposm">
          <option value="selecione">Selecione</option>
          <option value="Simples Passo">Simples Passo</option>
          <option value="Duplo Passo">Duplo Passo</option>
          <option value="ROD">ROD</option>
        </select>
      </div>
      <Flex>
        <div className="coluna">
          <label>Número da CAT:</label>
          <select
            name="cat_number"
            value={formData.cat_number}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            {availableCats.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div>
            <label htmlFor="vazao-alimentacao-1">Vazão de Alimentação</label>
            <input
              id="vazao-alimentacao-1"
              name="vazao-alimentacao-1"
              type="text"
              placeholder="LPM"
            />
          </div>
          <div>
            <label htmlFor="pressao-entrada-filtro-big-1">
              Pressão de Entrada Filtro Big
            </label>
            <input
              id="pressao-entrada-filtro-big-1"
              name="pressao-entrada-filtro-big-1"
              type="text"
              placeholder="kgf/cm²"
            />
          </div>
          <div>
            <label htmlFor="pressao-saida-filtro-big-1">
              Pressão de Saída Filtro Big
            </label>
            <input
              id="pressao-saida-filtro-big-1"
              name="pressao-saida-filtro-big-1"
              type="text"
              placeholder="kgf/cm²"
            />
          </div>
          <div>
            <label htmlFor="pressao-entrada-membranas-1p-1">
              Pressão de Entrada Membranas 1° Passo
            </label>
            <input
              id="pressao-entrada-membranas-1p-1"
              name="pressao-entrada-membranas-1p-1"
              type="text"
              placeholder="kgf/cm²"
            />
          </div>
          <div>
            <label htmlFor="pressao-saida-membranas-1p-1">
              Pressão de Saída Membranas 1° Passo
            </label>
            <input
              id="pressao-saida-membranas-1p-1"
              name="pressao-saida-membranas-1p-1"
              type="text"
              placeholder="kgf/cm²"
            />
          </div>
          <div>
            <label htmlFor="pressao-entrada-membranas-2p-1">
              Pressão de Entrada Membranas 2° Passo
            </label>
            <input
              id="pressao-entrada-membranas-2p-1"
              name="pressao-entrada-membranas-2p-1"
              type="text"
              placeholder="kgf/cm²"
            />
          </div>
          <div>
            <label htmlFor="pressao-saida-membranas-2p-1">
              Pressão de Saída Membranas 2° Passo
            </label>
            <input
              id="pressao-saida-membranas-2p-1"
              name="pressao-saida-membranas-2p-1"
              type="text"
              placeholder="kgf/cm²"
            />
          </div>
          <div>
            <label htmlFor="vazao-permeado-1p-1">
              Vazão do Permeado 1° Passo
            </label>
            <input
              id="vazao-permeado-1p-1"
              name="vazao-permeado-1p-1"
              type="text"
              placeholder="LPM"
            />
          </div>
          <div>
            <label htmlFor="vazao-rejeito-1p-1">
              Vazão do Rejeito 1° Passo
            </label>
            <input
              id="vazao-rejeito-1p-1"
              name="vazao-rejeito-1p-1"
              type="text"
              placeholder="LPM"
            />
          </div>
          <div>
            <label htmlFor="vazao-recirculacao-1p-1">
              Vazão do Recirculação 1° Passo
            </label>
            <input
              id="vazao-recirculacao-1p-1"
              name="vazao-recirculacao-1p-1"
              type="text"
              placeholder="LPM"
            />
          </div>
          <div>
            <label htmlFor="vazao-permeado-2p-1">
              Vazão do Permeado 2° Passo
            </label>
            <input
              id="vazao-permeado-2p-1"
              name="vazao-permeado-2p-1"
              type="text"
              placeholder="LPM"
            />
          </div>
          <div>
            <label htmlFor="vazao-rejeito-2p-1">
              Vazão do Rejeito 2° Passo
            </label>
            <input
              id="vazao-rejeito-2p-1"
              name="vazao-rejeito-2p-1"
              type="text"
              placeholder="LPM"
            />
          </div>
          <div>
            <label htmlFor="condutividade-final-1">Condutividade Final</label>
            <input
              id="condutividade-final-1"
              name="condutividade-final-1"
              type="text"
              placeholder="µS/cm"
            />
          </div>
          <div>
            <label htmlFor="temperatura-1">Temperatura</label>
            <input
              id="temperatura-1"
              name="temperatura-1"
              type="text"
              placeholder="°C"
            />
          </div>
        </div>
        <div className="coluna">
        <label>Cliente:</label>
        <input type="text" name="cliente" value={formData.cliente} readOnly />
          <div>
            <label htmlFor="vazao-alimentacao-2">Vazão de Alimentação</label>
            <input
              id="vazao-alimentacao-2"
              name="vazao-alimentacao-2"
              type="text"
              placeholder="LPM"
            />
          </div>
          <div>
            <label htmlFor="pressao-entrada-filtro-big-2">
              Pressão de Entrada Filtro Big
            </label>
            <input
              id="pressao-entrada-filtro-big-2"
              name="pressao-entrada-filtro-big-2"
              type="text"
              placeholder="kgf/cm²"
            />
          </div>
          <div>
            <label htmlFor="pressao-saida-filtro-big-2">
              Pressão de Saída Filtro Big
            </label>
            <input
              id="pressao-saida-filtro-big-2"
              name="pressao-saida-filtro-big-2"
              type="text"
              placeholder="kgf/cm²"
            />
          </div>
          <div>
            <label htmlFor="pressao-entrada-membranas-1p-2">
              Pressão de Entrada Membranas 1° Passo
            </label>
            <input
              id="pressao-entrada-membranas-1p-2"
              name="pressao-entrada-membranas-1p-2"
              type="text"
              placeholder="kgf/cm²"
            />
          </div>
          <div>
            <label htmlFor="pressao-saida-membranas-1p-2">
              Pressão de Saída Membranas 1° Passo
            </label>
            <input
              id="pressao-saida-membranas-1p-2"
              name="pressao-saida-membranas-1p-2"
              type="text"
              placeholder="kgf/cm²"
            />
          </div>
          <div>
            <label htmlFor="pressao-entrada-membranas-2p-2">
              Pressão de Entrada Membranas 2° Passo
            </label>
            <input
              id="pressao-entrada-membranas-2p-2"
              name="pressao-entrada-membranas-2p-2"
              type="text"
              placeholder="kgf/cm²"
            />
          </div>
          <div>
            <label htmlFor="pressao-saida-membranas-2p-2">
              Pressão de Saída Membranas 2° Passo
            </label>
            <input
              id="pressao-saida-membranas-2p-2"
              name="pressao-saida-membranas-2p-2"
              type="text"
              placeholder="kgf/cm²"
            />
          </div>
          <div>
            <label htmlFor="vazao-permeado-1p-2">
              Vazão do Permeado 1° Passo
            </label>
            <input
              id="vazao-permeado-1p-2"
              name="vazao-permeado-1p-2"
              type="text"
              placeholder="LPM"
            />
          </div>
          <div>
            <label htmlFor="vazao-rejeito-1p-2">
              Vazão do Rejeito 1° Passo
            </label>
            <input
              id="vazao-rejeito-1p-2"
              name="vazao-rejeito-1p-2"
              type="text"
              placeholder="LPM"
            />
          </div>
          <div>
            <label htmlFor="vazao-recirculacao-1p-2">
              Vazão do Recirculação 1° Passo
            </label>
            <input
              id="vazao-recirculacao-1p-2"
              name="vazao-recirculacao-1p-2"
              type="text"
              placeholder="LPM"
            />
          </div>
          <div>
            <label htmlFor="vazao-permeado-2p-2">
              Vazão do Permeado 2° Passo
            </label>
            <input
              id="vazao-permeado-2p-2"
              name="vazao-permeado-2p-2"
              type="text"
              placeholder="LPM"
            />
          </div>
          <div>
            <label htmlFor="vazao-rejeito-2p-2">
              Vazão do Rejeito 2° Passo
            </label>
            <input
              id="vazao-rejeito-2p-2"
              name="vazao-rejeito-2p-2"
              type="text"
              placeholder="LPM"
            />
          </div>
          <div>
            <label htmlFor="condutividade-final-2">Condutividade Final</label>
            <input
              id="condutividade-final-2"
              name="condutividade-final-2"
              type="text"
              placeholder="µS/cm"
            />
          </div>
          <div>
            <label htmlFor="temperatura-2">Temperatura</label>
            <input
              id="temperatura-2"
              name="temperatura-2"
              type="text"
              placeholder="°C"
            />
          </div>
        </div>
      </Flex>
      <div>
        <div>
          <label htmlFor="numero-serie-condutivimetro">
            n° de Série do Condutivímetro
          </label>
          <input id="numero-serie-condutivimetro" className="osmosisinput" />
        </div>
        <div>
          <label htmlFor="constante">Constante</label>
          <input id="constante" className="osmosisinput" />
        </div>
        <div>
          <label htmlFor="teste-pressostato">Teste do Pressostato</label>
          <select className="equiposm">
            <option value="selecione">Funcionamento Correto</option>
            <option value="Funcionamento Correto">Funcionamento Correto</option>
            <option value="Apresenta Defeito">Apresenta Defeito</option>
            <option value="na">N/A</option>
          </select>
        </div>
        <div>
          <label htmlFor="teste-falta-agua">Teste de Falta d'água</label>
          <select className="equiposm">
            <option value="correto">Funcionamento Correto</option>
            <option value="defeito">Apresenta Defeito</option>
            <option value="na">N/A</option>
          </select>
        </div>
        <div>
          <label htmlFor="horas-trabalhadas">Horas Trabalhadas</label>
          <input
            id="horas-trabalhadas"
            className="osmosisinput"
            placeholder="Horas"
          />
        </div>
      </div>
      <div>
        <button className="saveind" onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Osmosis;
