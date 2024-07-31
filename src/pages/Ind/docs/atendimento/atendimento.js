import './atendimento.css';
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    Start, 
    Services, 
    Pressure, 
    Filters, 
    Chemistry, 
    Desmineralizer, 
    Osmosis, 
    MixedBed, 
    Ozone, 
    Uv, 
    Reject, 
    Conductivity 
} from './Forms';

function Atendimento() {
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

    const handleSubmit = async () => {
        try {
            await axios.post(`API_URL/page${page}`, formData); // Substitua 'API_URL' pela sua URL real
            alert('Dados salvos com sucesso!');
        } catch (error) {
            alert('Erro ao salvar dados');
        }
    };

    return (
        <Flex>
            <Box className='sidebar' style={{ width: '20%' }}>
                <div className='sidebar-items'>
                    <button className='item' onClick={() => setPage(1)}>Instalação, Start-Up e Treinamento</button>
                    <button className='item' onClick={() => setPage(2)}>Serviços e Garantia</button>
                    <button className='item' onClick={() => setPage(3)}>Sistema Pressurizador</button>
                    <button className='item' onClick={() => setPage(4)}>Filtros</button>
                    <button className='item' onClick={() => setPage(5)}>Sistema de Dosagem Química</button>
                    <button className='item' onClick={() => setPage(6)}>Sistema Desmineralizador</button>
                    <button className='item' onClick={() => setPage(7)}>Sistema de Osmose Reversa</button>
                    <button className='item' onClick={() => setPage(8)}>Leito Misto Polidor</button>
                    <button className='item' onClick={() => setPage(9)}>Aferição do Condutivímetro</button>
                    <button className='item' onClick={() => setPage(10)}>Sistema Gerador de Ozônio</button>
                    <button className='item' onClick={() => setPage(11)}>Sistema de Desinfecção por UV</button>
                    <button className='item' onClick={() => setPage(12)}>Unidade de Recuperação de Rejeito</button>
                </div>
            </Box>
            <Box style={{ width: '75%' }}>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {page === 1 && (
                    <form>
                        <Start formData={formData} setFormData={setFormData} />
                    </form>
                )}
                {page === 2 && (
                    <form>
                        <Services formData={formData} setFormData={setFormData} />
                    </form>
                )}
                {page === 3 && (
                    <form>
                        <Pressure formData={formData} setFormData={setFormData} />
                    </form>
                )}
                {page === 4 && (
                    <form>
                        <Filters formData={formData} setFormData={setFormData} />
                    </form>
                )}
                {page === 5 && (
                    <form>
                        <Chemistry formData={formData} setFormData={setFormData} />
                    </form>
                )}
                {page === 6 && (
                    <form>
                        <Desmineralizer formData={formData} setFormData={setFormData} />
                    </form>
                )}
                {page === 7 && (
                    <form>
                        <Osmosis formData={formData} setFormData={setFormData} />
                    </form>
                )}
                {page === 8 && (
                    <form>
                        <MixedBed formData={formData} setFormData={setFormData} />
                    </form>
                )}
                {page === 9 && (
                    <form>
                        <Conductivity formData={formData} setFormData={setFormData} />
                    </form>
                )}
                {page === 10 && (
                    <form>
                        <Ozone formData={formData} setFormData={setFormData} />
                    </form>
                )}
                {page === 11 && (
                    <form>
                        <Uv formData={formData} setFormData={setFormData} />
                    </form>
                )}
                {page === 12 && (
                    <form>
                        <Reject formData={formData} setFormData={setFormData} />
                    </form>
                )}
                <div className='sidebar-items'>
                    <button className='saveind' onClick={handleSubmit}>Salvar</button>
                </div>
            </Box>
        </Flex>
    );
}

export default Atendimento;
