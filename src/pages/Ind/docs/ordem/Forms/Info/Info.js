import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate para navegação
import './Info.css';
import Informacao from '../../img/info.svg';

function Info() {
  const [formData, setFormData] = useState({
    data: '',
    cat_number: '',
    codigo_cliente: '',
    cliente: '',
    codigo_equip: '',
    equip: '',
    pessoa_contato: '',
    cep: '',
    endereco: '',
    numero: '',
    cidade: '',
    estado: '',
    resp_permution: '',
    tecnico: ''
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate(); // Cria uma instância do useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleCepChange = async (e) => {
    const cep = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      cep: cep,
    }));
  
    if (cep.length === 9) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep.replace('-', '')}/json/`);
        const data = response.data;
  
        if (!data.erro) {
          setFormData((prevState) => ({
            ...prevState,
            endereco: data.logradouro,
            cidade: data.localidade,
            estado: data.uf,
          }));
        } else {
          console.error('CEP não encontrado');
          alert('CEP não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
        alert('Erro ao buscar o CEP');
      }
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://permutioncat.fly.dev/info/', formData);
      setPopupVisible(true); // Exibe o popup
      setTimeout(() => {
        setPopupVisible(false);
        navigate('/ind/ordem'); // Redireciona para o menu Ind após 2.5 segundos
      }, 2500);
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      alert('Erro ao salvar dados');
    }
  };
  

  return (
    <div className="form">
      <div>
        <img className="start" src={Informacao} alt="instalacao" />
      </div>
      <div className="infotext">Informações do Cliente</div>
      <div className="inputs">
        <label>Data Agendada:</label>
        <input
          type="date"
          className="data"
          name="data"
          value={formData.data}
          onChange={handleChange}
        />
        <label>Número da CAT:</label>
        <input
          type="text"
          name="cat_number"
          value={formData.cat_number}
          onChange={handleChange}
        />
        <label>Código do Cliente:</label>
        <input
          type="text"
          name="codigo_cliente"
          value={formData.codigo_cliente}
          onChange={handleChange}
        />
        <label>Cliente:</label>
        <input
          type="text"
          name="cliente"
          value={formData.cliente}
          onChange={handleChange}
        />
        <label>Código do Equipamento:</label>
        <input
          type="text"
          name="codigo_equip"
          value={formData.codigo_equip}
          onChange={handleChange}
        />
        <label>Equipamento:</label>
        <input
          type="text"
          name="equip"
          value={formData.equip}
          onChange={handleChange}
        />
        <label>Contato do Cliente:</label>
        <input
          type="text"
          name="pessoa_contato"
          value={formData.pessoa_contato}
          onChange={handleChange}
        />
        <label>CEP:</label>
        <InputMask
          mask="99999-999"
          type='text'
          name="cep"
          value={formData.cep}
          onChange={handleCepChange}
        />
        <label>Endereço:</label>
        <input
          type="text"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          readOnly
        />
        <label>Número:</label>
        <input
          type="text"
          name="numero"
          value={formData.numero}
          onChange={handleChange}
        />
        <label>Cidade:</label>
        <input
          type="text"
          name="cidade"
          value={formData.cidade}
          onChange={handleChange}
          readOnly
        />
        <label>Estado:</label>
        <input
          type="text"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          readOnly
        />
        <label>Responsável Permution:</label>
        <select
          name="resp_permution"
          value={formData.resp_permution}
          onChange={handleChange}
          required
        >
          <option value="Selecione">Selecione</option>
          <option value="Alessandra">Alessandra Amorim</option>
          <option value="Alessandra L.">Alessandra Lindolfo</option>
          <option value="Alessandro">Alessandro Ferreira</option>
          <option value="Andressa">Andressa Remes</option>
          <option value="Antônio">Antônio Pedro</option>
          <option value="Bruna">Bruna Jaques</option>
          <option value="Cléber">Cléber Padilha</option>
          <option value="Leonardo">Leonardo Gonçalves</option>
          <option value="Nicole">Nicole Capistrano</option>
          <option value="Sarah">Sarah Coradin</option>
          <option value="Taciane">Taciane Magno</option>
        </select>
        <label>Técnico Responsável:</label>
        <select
          name="tecnico"
          value={formData.tecnico}
          onChange={handleChange}
          required
        >
          <option value="Selecione">Selecione</option>
          <option value="Aliezio">Aliezio</option>
          <option value="Ariel">Ariel</option>
          <option value="Claudionor">Claudionor</option>
          <option value="Edvaldo">Edvaldo</option>
          <option value="Marcelo">Marcelo</option>
          <option value="Milton">Milton</option>
          <option value="Natanael">Natanael</option>
        </select>
      </div>
      <div>
        <button className='saveind' onClick={handleSubmit}>Salvar</button>
      </div>
      {popupVisible && (
        <div className="popup">
          Informações do cliente salvas com sucesso!
        </div>
      )}
    </div>
  );
}

export default Info;
