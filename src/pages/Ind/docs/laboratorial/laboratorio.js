import './laboratorio.css'; // Certifique-se de ter um arquivo CSS para o componente
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Analysis } from './Forms'; // Certifique-se de que o componente Analysis esteja exportado corretamente

function Laboratorial() {
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('API_URL/laboratorial'); // Substitua 'API_URL' pela sua URL real
                setFormData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);

    const handleSubmit = async () => {
        try {
            await axios.post('API_URL/laboratorial', formData); // Substitua 'API_URL' pela sua URL real
            alert('Dados salvos com sucesso!');
        } catch (error) {
            alert('Erro ao salvar dados');
        }
    };

    return (
        <Flex>
            <Box className='sidebar' style={{ width: '20%' }}>
                <div className='sidebar-items'>
                    <button className='item' onClick={() => setPage(1)}>Análise de Água</button>
                </div>
            </Box>
            <Box style={{ width: '75%' }}>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {page === 1 && (
                    <form>
                        <Analysis formData={formData} setFormData={setFormData} />
                    </form>
                )}
            </Box>
            <Box className='sidebar' style={{ width: '20%' }}>
                <div className='sidebar-items'>
                    <button className='save' onClick={handleSubmit}>Salvar</button>
                </div>
            </Box>
        </Flex>
    );
}

export default Laboratorial;
