import "./index.css";
import Box from "../Box";
import logo from './logo.png';
import whats from './whats.svg';
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
          <a href='https://web.whatsapp.com/send?phone=+5541999791076' className="icone whats">
            <span className="ferramenta">WhatsApp</span>
            <img className="whats" src={whats} alt='Logo Permution'/>
          </a>
        </Box>
    </header>
  );
};

export default Header;