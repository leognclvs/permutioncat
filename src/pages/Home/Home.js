import './Home.css';
import hosp from './hosp.svg';
import ind from './ind.svg';
import lab from './lab.svg';
import { SpeedInsights } from '@vercel/speed-insights/react';

function Home() {
    return(
    <section className='section-text'>
      <h1 style={{textAlign: 'center'}}>Bem-vindo(a) ao Permution CAT</h1>
      <div style={{display: 'flex'}} className='wrap'>

      <a href='/lab' className='icon'>
      <img className='img' src={lab} alt='laboratorial'/></a>

      <a href='/hosp' className='icon'>
      <img className='img' src={hosp} alt='hospitalar'/></a>

      <a href='/ind' className='icon'>
      <img className='img' src={ind} alt='industrial'/></a>

      <SpeedInsights />

      </div>
    </section>
    );
};

export default Home;