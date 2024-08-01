import './treinamento.css';
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Treino } from './Forms';

function Treinamento() {
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`API_URL/page${page}`); // Substitua 'API_URL' pela sua URL real
                setFormData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);

    return (
        <Flex>
            <Box className='sidebar' style={{ width: '20%' }}>
                <div className='sidebar-items'>
                    <button className='item' onClick={() => setPage(1)}>Treinamento</button>
                </div>
            </Box>
            <Box style={{ width: '70%' }}>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {page === 1 && (
                    <form>
                        <Treino formData={formData} setFormData={setFormData} />
                    </form>
                )}
            </Box>
        </Flex>
    );
}

export default Treinamento;
