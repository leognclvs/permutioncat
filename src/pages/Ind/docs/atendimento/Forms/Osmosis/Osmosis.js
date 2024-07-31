import "./Osmosis.css";
import Osmose from "../../img/osmose.svg";
import React from "react";
import Flex from "../../../../../../components/Flex";  // Certifique-se de ajustar o caminho para o componente Flex

function Osmosis() {
  return (
    <div className="osmose-form">
      <div>
        <img className="osmosis" src={Osmose} alt="osmose" />
      </div>
      <div className="startext">Sistema de Osmose Reversa</div>
      <div>
        <label>Equipamento</label>
        <select className="equiposm">
          <option value="selecione">Selecione</option>
          <option value="simples-passo">Simples Passo</option>
          <option value="duplo-passo">Duplo Passo</option>
          <option value="rod">ROD</option>
        </select>
      </div>
      <Flex>
        <div className="coluna">
          <div>
            <label htmlFor="vazao-alimentacao-1">Vazão de Alimentação</label>
            <input id="vazao-alimentacao-1" name="vazao-alimentacao-1" type="text" placeholder="LPM" />
          </div>
          <div>
            <label htmlFor="pressao-entrada-filtro-big-1">Pressão de Entrada Filtro Big</label>
            <input id="pressao-entrada-filtro-big-1" name="pressao-entrada-filtro-big-1" type="text" placeholder="kgf/cm²" />
          </div>
          <div>
            <label htmlFor="pressao-saida-filtro-big-1">Pressão de Saída Filtro Big</label>
            <input id="pressao-saida-filtro-big-1" name="pressao-saida-filtro-big-1" type="text" placeholder="kgf/cm²" />
          </div>
          <div>
            <label htmlFor="pressao-entrada-membranas-1p-1">Pressão de Entrada Membranas 1° Passo</label>
            <input id="pressao-entrada-membranas-1p-1" name="pressao-entrada-membranas-1p-1" type="text" placeholder="kgf/cm²" />
          </div>
          <div>
            <label htmlFor="pressao-saida-membranas-1p-1">Pressão de Saída Membranas 1° Passo</label>
            <input id="pressao-saida-membranas-1p-1" name="pressao-saida-membranas-1p-1" type="text" placeholder="kgf/cm²" />
          </div>
          <div>
            <label htmlFor="pressao-entrada-membranas-2p-1">Pressão de Entrada Membranas 2° Passo</label>
            <input id="pressao-entrada-membranas-2p-1" name="pressao-entrada-membranas-2p-1" type="text" placeholder="kgf/cm²" />
          </div>
          <div>
            <label htmlFor="pressao-saida-membranas-2p-1">Pressão de Saída Membranas 2° Passo</label>
            <input id="pressao-saida-membranas-2p-1" name="pressao-saida-membranas-2p-1" type="text" placeholder="kgf/cm²" />
          </div>
          <div>
            <label htmlFor="vazao-permeado-1p-1">Vazão do Permeado 1° Passo</label>
            <input id="vazao-permeado-1p-1" name="vazao-permeado-1p-1" type="text" placeholder="LPM" />
          </div>
          <div>
            <label htmlFor="vazao-rejeito-1p-1">Vazão do Rejeito 1° Passo</label>
            <input id="vazao-rejeito-1p-1" name="vazao-rejeito-1p-1" type="text" placeholder="LPM" />
          </div>
          <div>
            <label htmlFor="vazao-recirculacao-1p-1">Vazão do Recirculação 1° Passo</label>
            <input id="vazao-recirculacao-1p-1" name="vazao-recirculacao-1p-1" type="text" placeholder="LPM" />
          </div>
          <div>
            <label htmlFor="vazao-permeado-2p-1">Vazão do Permeado 2° Passo</label>
            <input id="vazao-permeado-2p-1" name="vazao-permeado-2p-1" type="text" placeholder="LPM" />
          </div>
          <div>
            <label htmlFor="vazao-rejeito-2p-1">Vazão do Rejeito 2° Passo</label>
            <input id="vazao-rejeito-2p-1" name="vazao-rejeito-2p-1" type="text" placeholder="LPM" />
          </div>
          <div>
            <label htmlFor="condutividade-final-1">Condutividade Final</label>
            <input id="condutividade-final-1" name="condutividade-final-1" type="text" placeholder="µS/cm" />
          </div>
          <div>
            <label htmlFor="temperatura-1">Temperatura</label>
            <input id="temperatura-1" name="temperatura-1" type="text" placeholder="°C" />
          </div>
        </div>
        <div className="coluna">
          <div>
            <label htmlFor="vazao-alimentacao-2">Vazão de Alimentação</label>
            <input id="vazao-alimentacao-2" name="vazao-alimentacao-2" type="text" placeholder="LPM" />
          </div>
          <div>
            <label htmlFor="pressao-entrada-filtro-big-2">Pressão de Entrada Filtro Big</label>
            <input id="pressao-entrada-filtro-big-2" name="pressao-entrada-filtro-big-2" type="text" placeholder="kgf/cm²" />
          </div>
          <div>
            <label htmlFor="pressao-saida-filtro-big-2">Pressão de Saída Filtro Big</label>
            <input id="pressao-saida-filtro-big-2" name="pressao-saida-filtro-big-2" type="text" placeholder="kgf/cm²" />
          </div>
          <div>
            <label htmlFor="pressao-entrada-membranas-1p-2">Pressão de Entrada Membranas 1° Passo</label>
            <input id="pressao-entrada-membranas-1p-2" name="pressao-entrada-membranas-1p-2" type="text" placeholder="kgf/cm²" />
          </div>
          <div>
            <label htmlFor="pressao-saida-membranas-1p-2">Pressão de Saída Membranas 1° Passo</label>
            <input id="pressao-saida-membranas-1p-2" name="pressao-saida-membranas-1p-2" type="text" placeholder="kgf/cm²" />
          </div>
          <div>
            <label htmlFor="pressao-entrada-membranas-2p-2">Pressão de Entrada Membranas 2° Passo</label>
            <input id="pressao-entrada-membranas-2p-2" name="pressao-entrada-membranas-2p-2" type="text" placeholder="kgf/cm²" />
          </div>
          <div>
            <label htmlFor="pressao-saida-membranas-2p-2">Pressão de Saída Membranas 2° Passo</label>
            <input id="pressao-saida-membranas-2p-2" name="pressao-saida-membranas-2p-2" type="text" placeholder="kgf/cm²" />
          </div>
          <div>
            <label htmlFor="vazao-permeado-1p-2">Vazão do Permeado 1° Passo</label>
            <input id="vazao-permeado-1p-2" name="vazao-permeado-1p-2" type="text" placeholder="LPM" />
          </div>
          <div>
            <label htmlFor="vazao-rejeito-1p-2">Vazão do Rejeito 1° Passo</label>
            <input id="vazao-rejeito-1p-2" name="vazao-rejeito-1p-2" type="text" placeholder="LPM" />
          </div>
          <div>
            <label htmlFor="vazao-recirculacao-1p-2">Vazão do Recirculação 1° Passo</label>
            <input id="vazao-recirculacao-1p-2" name="vazao-recirculacao-1p-2" type="text" placeholder="LPM" />
          </div>
          <div>
            <label htmlFor="vazao-permeado-2p-2">Vazão do Permeado 2° Passo</label>
            <input id="vazao-permeado-2p-2" name="vazao-permeado-2p-2" type="text" placeholder="LPM" />
          </div>
          <div>
            <label htmlFor="vazao-rejeito-2p-2">Vazão do Rejeito 2° Passo</label>
            <input id="vazao-rejeito-2p-2" name="vazao-rejeito-2p-2" type="text" placeholder="LPM" />
          </div>
          <div>
            <label htmlFor="condutividade-final-2">Condutividade Final</label>
            <input id="condutividade-final-2" name="condutividade-final-2" type="text" placeholder="µS/cm" />
          </div>
          <div>
            <label htmlFor="temperatura-2">Temperatura</label>
            <input id="temperatura-2" name="temperatura-2" type="text" placeholder="°C" />
          </div>
        </div>
      </Flex>
      <div>
        <div>
          <label htmlFor="numero-serie-condutivimetro">n° de Série do Condutivímetro</label>
          <input id="numero-serie-condutivimetro" className="osmosisinput" />
        </div>
        <div>
          <label htmlFor="constante">Constante</label>
          <input id="constante" className="osmosisinput" />
        </div>
        <div>
          <label htmlFor="teste-pressostato">Teste do Pressostato</label>
          <select className="equiposm">
            <option value="correto">Funcionamento Correto</option>
            <option value="defeito">Apresenta Defeito</option>
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
          <input id="horas-trabalhadas" className="osmosisinput" placeholder="Horas" />
        </div>
      </div>
    </div>
  );
}

export default Osmosis;
