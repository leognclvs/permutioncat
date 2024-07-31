import './Lab.css';
import agua from './img/agua.svg';
import ordem from './img/ordem.svg';
import tecnico from './img/tecnico.svg';
import treinamento from './img/treinamento.svg';
import dashboard from './img/dashboard.svg';

function Lab() {
    return(
        <section className='section-lab'>
            <h1>Selecione abaixo a função desejada</h1>
            <h3>Em caso de dúvidas, favor entrar em contato com o SAC, através do contato acima</h3>
            <div className='wraplab'>
                <a href='/lab/dashboard' className='iconlab'>
                <img className='lab-icones' src={dashboard} alt='ordem'/>
                <span className='hover-text'>Ordem de Serviço</span></a>

                <a href='/lab/ordem' className='iconlab'>
                <img className='lab-icones' src={ordem} alt='ordem'/>
                <span className='hover-text'>Ordem de Serviço</span></a>

                <a href='/lab/atendimento' className='iconlab'>
                <img className='lab-icones' src={tecnico} alt='controle de atendimento'/>
                <span className='hover-text'>Atendimento</span></a>

                <a href='/lab/treino' className='iconlab'>
                <img className='lab-icones' src={treinamento} alt='treinamento'/>
                <span className='hover-text'>Treinamento</span></a>

                <a href='/lab/laboratorial' className='iconlab'>
                <img className='lab-icones' src={agua} alt='laboratório'/>
                <span className='hover-text'>Análise de Água</span></a>
            </div>
        </section>
    )
}

export default Lab;