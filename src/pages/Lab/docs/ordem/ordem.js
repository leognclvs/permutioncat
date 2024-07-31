import './ordem.css';
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Info, Order } from './Forms';

function Ordem() {
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('API_URL/ordem'); // Substitua 'API_URL' pela sua URL real
                setFormData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async () => {
        try {
            if (page === 1) {
                await axios.post('API_URL/info', formData); // Substitua 'API_URL' pela sua URL real
                alert('Informações do cliente salvas com sucesso!');
            } else if (page === 2) {
                await axios.post('API_URL/order', formData); // Substitua 'API_URL' pela sua URL real
                alert('Ordem de serviço salva com sucesso!');
            }
        } catch (error) {
            alert('Erro ao salvar dados');
        }
    };

    return (
        <Flex>
            <Box className='sidebar' style={{ width: '20%' }}>
                <div className='sidebar-items'>
                    <button className='item' onClick={() => setPage(1)}>Informações do Cliente</button>
                    <button className='item' onClick={() => setPage(2)}>Ordem de Serviço</button>
                </div>
            </Box>
            <Box style={{ width: '60%' }}>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {page === 1 && (
                    <form>
                        <Info formData={formData} setFormData={setFormData} />
                    </form>
                )}
                {page === 2 && (
                    <form>
                        <Order formData={formData} setFormData={setFormData} />
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

export default Ordem;
