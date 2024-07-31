import './Hosp.css';
import agua from './img/agua.svg';
import ordem from './img/ordem.svg';
import tecnico from './img/tecnico.svg';
import treinamento from './img/treinamento.svg';
import dashboard from './img/dashboard.svg';

function Hosp() {
    return(
        <section className='section-hosp'>
            <h1>Selecione abaixo a função desejada</h1>
            <h3>Em caso de dúvidas, favor entrar em contato com o SAC, através do contato acima</h3>
            <div className='wraphosp'>
                <a href='/hosp/dashboard' className='iconhosp'>
                <img className='hosp-icones' src={dashboard} alt='ordem'/>
                <span className='hover-text'>Ordem de Serviço</span></a>

                <a href='/hosp/ordem' className='iconhosp'>
                <img className='hosp-icones' src={ordem} alt='ordem'/>
                <span className='hover-text'>Ordem de Serviço</span></a>

                <a href='/hosp/atendimento' className='iconhosp'>
                <img className='hosp-icones' src={tecnico} alt='controle de atendimento'/>
                <span className='hover-text'>Atendimento</span></a>

                <a href='/hosp/treino' className='iconhosp'>
                <img className='hosp-icones' src={treinamento} alt='treinamento'/>
                <span className='hover-text'>Treinamento</span></a>

                <a href='/hosp/laboratorial' className='iconhosp'>
                <img className='hosp-icones' src={agua} alt='laboratório'/>
                <span className='hover-text'>Análise de Água</span></a>
            </div>
        </section>
    )
}

export default Hosp;