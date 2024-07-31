import React, { useState } from 'react';
import "./Ozone.css";
import Ozonio from '../../img/ozonio.svg';
import axios from 'axios'; // Importar Axios

function Ozone() {
    // Estados para armazenar os valores dos inputs
    const [verificacao, setVerificacao] = useState("");
    const [orpHigh, setOrpHigh] = useState("");
    const [orpLow, setOrpLow] = useState("");

    // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            verificacao,
            orpHigh,
            orpLow
        };

        try {
            const response = await axios.post("YOUR_API_ENDPOINT_HERE", data);
            console.log("Dados enviados com sucesso:", response.data);
            // Lidar com resposta positiva, como limpar o formulário ou mostrar uma mensagem de sucesso
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            // Lidar com erros, como mostrar uma mensagem de erro para o usuário
        }
    };

    return (
        <div className='ozone-form'>
            <div>
                <img className='ozone' src={Ozonio} alt='Sistema Gerador de Ozônio' />
            </div>
            <div className='ozonetext'>
                Sistema Gerador de Ozônio
            </div>
            <form onSubmit={handleSubmit} className='ozone-inputs'>
                <label htmlFor='verificacao'>Verificação Operacional (Modo Manual):</label>
                <select
                    id='verificacao'
                    name='verificacao'
                    value={verificacao}
                    onChange={(e) => setVerificacao(e.target.value)}
                    required
                >
                    <option value="">Selecione</option>
                    <option value="funcionamento_correto">Funcionamento Correto</option>
                    <option value="apresenta_defeito">Apresenta Defeito</option>
                </select>

                <label htmlFor='orpHigh'>ORP High:</label>
                <input
                    type='text'
                    id='orpHigh'
                    name='orpHigh'
                    value={orpHigh}
                    onChange={(e) => setOrpHigh(e.target.value)}
                    required
                />

                <label htmlFor='orpLow'>ORP Low:</label>
                <input
                    type='text'
                    id='orpLow'
                    name='orpLow'
                    value={orpLow}
                    onChange={(e) => setOrpLow(e.target.value)}
                    required
                />

                <button type='submit' className='submit-button'>Enviar</button>
            </form>
        </div>
    );
}

export default Ozone;
