import './Dashboard.css';
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';
import React from 'react';
import { Cat } from './Forms';

function Atendimento() {

    return (
        <Flex>
            <Box className='sidebar' style={{ width: '10%' }}>
                <div className='sidebar-items'>
                </div>
            </Box>
            <Box style={{ width: '80%' }}>
                    <form>
                        <label>
                            <Cat/>
                        </label>
                    </form>
            </Box>
        </Flex>
    );
}

export default Atendimento;
