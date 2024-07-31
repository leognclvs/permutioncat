import './Hosp.css';
import agua from './agua.svg';
import ordem from './ordem.svg';
import tecnico from './tecnico.svg';
import treinamento from './treinamento.svg';

function Hosp() {
    return(
        <section className='section-hosp'>
            <h1>Selecione abaixo a função desejada</h1>
            <h3>Em caso de dúvidas, favor entrar em contato com o SAC, através do contato acima</h3>
            <div className='wraphosp'>
                <a href='/hosp/#' className='iconhosp'>
                <img className='hosp-icones' src={ordem} alt='ordem'/>
                <span className='hover-text'>Ordem de Serviço</span></a>

                <a href='/hosp/#' className='iconhosp'>
                <img className='hosp-icones' src={tecnico} alt='controle de atendimento'/>
                <span className='hover-text'>Atendimento</span></a>

                <a href='/hosp/#' className='iconhosp'>
                <img className='hosp-icones' src={treinamento} alt='treinamento'/>
                <span className='hover-text'>Treinamento</span></a>

                <a href='/hosp/#' className='iconhosp'>
                <img className='hosp-icones' src={agua} alt='laboratório'/>
                <span className='hover-text'>Análise de Água</span></a>
            </div>
        </section>
    )
}

export default Hosp;