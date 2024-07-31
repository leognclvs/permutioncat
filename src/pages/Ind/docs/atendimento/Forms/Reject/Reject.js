import React, { useState } from 'react';
import "./Reject.css";
import Rejeito from '../../img/rejeito.svg';
import axios from 'axios'; // Importar Axios

function Reject() {
    // Estados para armazenar os valores dos inputs
    const [pressaoEntrada, setPressaoEntrada] = useState("");
    const [pressaoAposCartucho, setPressaoAposCartucho] = useState("");
    const [pressaoAntesMembrana, setPressaoAntesMembrana] = useState("");
    const [pressaoAposMembrana, setPressaoAposMembrana] = useState("");
    const [vazaoPermeado, setVazaoPermeado] = useState("");
    const [vazaoRejeito, setVazaoRejeito] = useState("");

    // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            pressaoEntrada,
            pressaoAposCartucho,
            pressaoAntesMembrana,
            pressaoAposMembrana,
            vazaoPermeado,
            vazaoRejeito
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
        <div className='form'>
            <div>
                <img className='start' src={Rejeito} alt='Unidade de Recuperação de Rejeito' />
            </div>
            <div className='startext'>
                Unidade de Recuperação de Rejeito
            </div>
            <form onSubmit={handleSubmit} className='inputs'>
                <label htmlFor='pressaoEntrada'>Pressão de Entrada:</label>
                <input
                    type='text'
                    id='pressaoEntrada'
                    value={pressaoEntrada}
                    onChange={(e) => setPressaoEntrada(e.target.value)}
                    required
                />
                <label htmlFor='pressaoAposCartucho'>Pressão Após Cartucho:</label>
                <input
                    type='text'
                    id='pressaoAposCartucho'
                    value={pressaoAposCartucho}
                    onChange={(e) => setPressaoAposCartucho(e.target.value)}
                    required
                />
                <label htmlFor='pressaoAntesMembrana'>Pressão Antes da Membrana:</label>
                <input
                    type='text'
                    id='pressaoAntesMembrana'
                    value={pressaoAntesMembrana}
                    onChange={(e) => setPressaoAntesMembrana(e.target.value)}
                    required
                />
                <label htmlFor='pressaoAposMembrana'>Pressão Após Membrana:</label>
                <input
                    type='text'
                    id='pressaoAposMembrana'
                    value={pressaoAposMembrana}
                    onChange={(e) => setPressaoAposMembrana(e.target.value)}
                    required
                />
                <label htmlFor='vazaoPermeado'>Vazão do Permeado:</label>
                <input
                    type='text'
                    id='vazaoPermeado'
                    value={vazaoPermeado}
                    onChange={(e) => setVazaoPermeado(e.target.value)}
                    required
                />
                <label htmlFor='vazaoRejeito'>Vazão do Rejeito:</label>
                <input
                    type='text'
                    id='vazaoRejeito'
                    value={vazaoRejeito}
                    onChange={(e) => setVazaoRejeito(e.target.value)}
                    required
                />
                <button type='submit' className='submit-button'>Enviar</button>
            </form>
        </div>
    )
}

export default Reject;
