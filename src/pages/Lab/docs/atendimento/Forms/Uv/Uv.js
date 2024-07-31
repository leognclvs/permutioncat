import React, { useState } from 'react';
import "./Uv.css";
import Ultravioleta from '../../img/uv.svg';
import axios from 'axios'; // Importar Axios

function Uv() {
    // Estados para armazenar os valores dos inputs
    const [horasOsmose, setHorasOsmose] = useState("");
    const [horasLooping, setHorasLooping] = useState("");

    // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            horasOsmose,
            horasLooping
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
                <img className='uv' src={Ultravioleta} alt='Sistema de Desinfecção por UV' />
            </div>
            <div className='uvtext'>
                Sistema de Desinfecção por UV
            </div>
            <form onSubmit={handleSubmit} className='inputs'>
                <label htmlFor='horasOsmose'>Horas Trabalhadas Osmose:</label>
                <input
                    type='text'
                    id='horasOsmose'
                    value={horasOsmose}
                    onChange={(e) => setHorasOsmose(e.target.value)}
                    required
                />

                <label htmlFor='horasLooping'>Horas Trabalhadas Looping:</label>
                <input
                    type='text'
                    id='horasLooping'
                    value={horasLooping}
                    onChange={(e) => setHorasLooping(e.target.value)}
                    required
                />
            </form>
        </div>
    )
}

export default Uv;
