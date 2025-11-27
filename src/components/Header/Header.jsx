import "../Header/Header.css"
import { NavLink } from "react-router-dom";
import logoPlanstar from "../../assets/favicon-logo.png"
const Header = () =>{
    return(
       <header class="header">
        <div class="header-left">
            <img src={logoPlanstar} alt="Logo PlanStar" class="logo" />
            <div class="header-left-text">
            <span class="brand-name-titulo">PlanStar</span>
            <span class="brand-name-subTitulo">Organize. Respeito. Leveza.</span>
            </div>
        </div>

        <nav class="nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Início</NavLink>
            <NavLink to="/sobre" className={({ isActive }) => isActive ? "active" : ""}>Sobre</NavLink>
            <NavLink to="/missao" className={({ isActive }) => isActive ? "active" : ""}>Missão</NavLink>
            <NavLink to="/contato" className={({ isActive }) => isActive ? "active" : ""}>Contato</NavLink>
        </nav>
    </header>
    )
}

export default Header;