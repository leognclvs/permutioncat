import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate para navegação
import './Order.css';
import Ordem from '../../img/order.svg';

function Order() {
  const [formData, setFormData] = useState({
    cat_number: '',
    cliente: '',
    ordem: '',
  });
  const [availableCats, setAvailableCats] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate(); // Cria uma instância do useNavigate

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get('https://permutioncat.fly.dev/cats-ordem/');
        setAvailableCats(response.data);
      } catch (error) {
        console.error('Erro ao carregar CATs disponíveis:', error);
      }
    };

    fetchAvailableCats();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));

    // Se o campo alterado for "cat_number", busque as informações do cliente
    if (name === 'cat_number') {
      fetchClientData(value);
    }
  };

  const fetchClientData = async (catNumber) => {
    try {
      const response = await axios.get(`https://permutioncat.fly.dev/info/${catNumber}/`);
      setFormData((prevState) => ({
        ...prevState,
        cliente: response.data.cliente
      }));
    } catch (error) {
      console.error('Erro ao carregar informações do cliente:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://permutioncat.fly.dev/ordem/', formData);
      setPopupVisible(true); // Exibe o popup
      setTimeout(() => {
        setPopupVisible(false);
        navigate('/menu-ind'); // Redireciona para o menu Ind após 5 segundos
      }, 2500);
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      alert('Erro ao salvar dados');
    }
  };

  return (
    <div className="form">
      <div>
        <img className="order" src={Ordem} alt="instalacao" />
      </div>
      <div className="startext">Ordem de Serviço</div>
      <div className="order-column">
        <label>Número da CAT:</label>
        <select
          name="cat_number"
          className='orderselect'
          value={formData.cat_number}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          {availableCats.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <label>Cliente:</label>
        <input
          className='orderselect'
          name="cliente"
          value={formData.cliente}
          readOnly
        />
        <label>Ordem:</label>
        <textarea
          className="font-ordem"
          name="ordem"
          value={formData.ordem}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <button className='saveind' onClick={handleSubmit}>Salvar</button>
      </div>
      {popupVisible && (
        <div className="popup">
          Ordem de Serviço salva com sucesso!
        </div>
      )}
    </div>
  );
}

export default Order;
