import "./index.css";
import Box from "../Box";
import logo from './logo.png';
import whats from './whats.svg';
import agenda from './schedule.svg';
import relatorio from './relatorio.svg';
import {
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <header>
        <Link to='/'>
            <img style={{ width: '60%' }} src={logo} alt='Logo Permution'/>
        </Link>
        <Box className="wrap">
          <a href='/tecnicos' className="icone whats">
            <span className="ferramenta">Horários</span>
            <img className="whats" src={agenda} alt='Logo Permution'/>
          </a>
          <a href='/relatorio' className="icone whats">
            <span className="ferramenta">Relatório</span>
            <img className="whats" src={relatorio} alt='Logo Permution'/>
          </a>
          <a href='https://web.whatsapp.com/send?phone=+5541999791076' className="icone whats">
            <span className="ferramenta">WhatsApp</span>
            <img className="whats" src={whats} alt='Logo Permution'/>
          </a>
        </Box>
    </header>
  );
};

export default Header;