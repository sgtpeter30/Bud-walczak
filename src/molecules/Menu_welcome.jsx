import logo from "../icons/logo.png";
import { Link } from 'react-router-dom';

import "../styles/menu_welcome.scss";

const Menu_welcome = () => {
  return (
    <div className="menu_main_page d-flex flex-wrap justify-content-center align-items-center">
      <img src={logo} alt="bud-walczak_logo" />
        {/* <Link to="/contact" className="btn btn-primary d-flex w-75 justify-content-center">Kontakt</Link> */}
    </div>
  );
};

export default Menu_welcome;