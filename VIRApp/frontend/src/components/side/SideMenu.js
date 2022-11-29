import {Link} from "react-router-dom";
import logo from "../img/logo.png"
import classes from './SideMenu.module.css'

function SideMenu() {
  return (
    <nav>
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      <Link to="/">На головну</Link>
      <Link to="/new-article">Створити нову статтю</Link>
      <Link to="#">Увійти</Link>
    </nav>
);
}

export default SideMenu;