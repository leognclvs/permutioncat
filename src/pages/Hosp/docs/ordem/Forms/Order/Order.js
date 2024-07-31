import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Order.css';
import Ordem from '../../img/order.svg';

function Order() {
  const [tasks, setTasks] = useState([]);

  // Função para carregar as tarefas da API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://sua-api.com/tasks');
        if (Array.isArray(response.data)) {
          setTasks(response.data);
        } else {
          setTasks([]); // ou defina algum estado padrão
        }
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
        setTasks([]);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="form">
      <div>
        <img className="order" src={Ordem} alt="instalacao" />
      </div>
      <div className="startext">Ordem de Serviço</div>
      <div className="order-column">
        <label>Ordem:</label>
        <textarea
          className="font-ordem"
          name="ordem"
          value={tasks.map(task => task.task).join('\n')}
          readOnly
          style={{ height: '40vh', width: '100%', background: '#D3E2EF' }}
        ></textarea>
      </div>
    </div>
  );
}

export default Order;
