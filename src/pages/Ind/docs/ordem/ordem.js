import './ordem.css';
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';
import React, { useState } from 'react';
import { Info, Order } from './Forms';

function Ordem() {
    const [page, setPage] = useState(1);

    return (
        <Flex>
            <Box className='sidebar' style={{ width: '20%' }}>
                <div className='sidebar-items'>
                    <button className='item' onClick={() => setPage(1)}>Informações do Cliente</button>
                    <button className='item' onClick={() => setPage(2)}>Ordem de Serviço</button>
                </div>
            </Box>
            <Box style={{ width: '70%' }}>
                {page === 1 && (
                    <form>
                        <Info />
                    </form>
                )}
                {page === 2 && (
                    <form>
                        <Order />
                    </form>
                )}
            </Box>
        </Flex>
    );
}

export default Ordem;
