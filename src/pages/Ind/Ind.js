import './Ind.css';
import agua from './img/agua.svg';
import ordem from './img/ordem.svg';
import tecnico from './img/tecnico.svg';
import treinamento from './img/treinamento.svg';
import dashboard from './img/dashboard.svg';

function Ind() {
    return(
        <section className='section-ind'>
            <h1>Selecione abaixo a função desejada</h1>
            <h3>Em caso de dúvidas, favor entrar em contato com o SAC, através do contato acima</h3>
            <div className='wrapind'>
                <a href='/ind/dashboard' className='iconind'>
                <img className='ind-icones' src={dashboard} alt='dashboard'/>
                <span className='hover-text'>Dashboard</span></a>

                <a href='/ind/ordem' className='iconind'>
                <img className='ind-icones' src={ordem} alt='ordem'/>
                <span className='hover-text'>Ordem de Serviço</span></a>

                <a href='/ind/atendimento' className='iconind'>
                <img className='ind-icones' src={tecnico} alt='controle de atendimento'/>
                <span className='hover-text'>Atendimento</span></a>

                <a href='/ind/treino' className='iconind'>
                <img className='ind-icones' src={treinamento} alt='treinamento'/>
                <span className='hover-text'>Treinamento</span></a>

                <a href='/ind/laboratorial' className='iconind'>
                <img className='ind-icones' src={agua} alt='laboratório'/>
                <span className='hover-text'>Análise de Água</span></a>
            </div>
        </section>
    )
}

export default Ind;