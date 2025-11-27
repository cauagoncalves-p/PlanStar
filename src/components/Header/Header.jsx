import styles from "../Header/Header.module.css"
import { NavLink } from "react-router-dom";
import logoPlanstar from "../../assets/favicon-logo.png"
const Header = () =>{
    return(
       <header className={styles.header}>
        <div className={styles.header_left}>
            <img src={logoPlanstar} alt="Logo PlanStar" className={styles.logo}/>
            <div className={styles.header_left_text}>
            <span className={styles.brand_name_titulo}>PlanStar</span>
            <span className={styles.brand_name_subTitulo}>Organize. Respeito. Leveza.</span>
            </div>
        </div>

        <nav className={styles.nav}>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Início</NavLink>
            <NavLink to="/sobre" className={({ isActive }) => isActive ? "active" : ""}>Sobre</NavLink>
            <NavLink to="/missao" className={({ isActive }) => isActive ? "active" : ""}>Missão</NavLink>
            <NavLink to="/contato" className={({ isActive }) => isActive ? "active" : ""}>Contato</NavLink>
        </nav>
    </header>
    )
}

export default Header;