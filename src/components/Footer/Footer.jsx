import styles from "../Footer/Footer.module.css"
import logoInstagram from "../Footer/assets/instagram-logo.png"
import logoLinkedln from "../Footer/assets/linkedin-logo.png"
import logoPlanStar from "../../assets/favicon-logo.png";
import logoTikTok from "../Footer/assets/tik-tok.png"
import { Link } from "react-router-dom"
const Footer = () =>{
   return(
     <footer>
        <section>
          <div className={styles.logo_footer}>
            <h2>PlanStar</h2>
            <img src={logoPlanStar} alt="Logo de uma estrela verde"/>
          </div>

          <div className={styles.logo_infos}>
            <h3>Inicio</h3>
            <div>
                 <Link to="/">Início</Link>
                  <Link to="/sobre">Sobre</Link>
                  <Link to="/missao">Missão</Link>
                  <Link to="/contato">Contato</Link>
            </div>
          </div>
        
          <div className={styles.contacts_logo}>
              <h3>Informações de contato</h3>
              <div>
                <a href="mailto:planstar@gmail.com?subject=Contato&body=Olá, gostaria de falar.">Email para contato: planstar@gmail.com</a>
                <a href="">WhatsApp: (11) 98756_4321</a>
                <a href="https://bit.ly/48EY1L2" target="_blank" rel="noopener noreferrer">Local: Espro Santo Amaro</a>
              </div>
          </div>

          <div className={styles.policies_footer}>
            <h3>Política de privacidade</h3>
            <div>
              <a href="">Política de Privacidade</a>
              <a href="">Termos de Uso</a>
            </div>
          </div>

          <div className={styles.image_footer_socia_midia}>
            <h3>Redes sociais</h3>
            <div>
                <a href="https://www.instagram.com/planstar_"><img src={logoInstagram} alt="Logo do instagram" target="_blank" rel="noopener noreferrer"/></a>
                <a href="https://bit.ly/3KjiAU2"><img src={logoLinkedln} alt="Logo do Linkedln"/></a>
                <a href="https://www.tiktok.com/@planstar__?_r=1&_t=ZM-91lPRG7bY8u"><img src={logoTikTok} alt="Logo do TikTok" target="_blank" rel="noopener noreferrer"/></a>
            </div>
          </div>
      </section>
      <div className={styles.copywrite_footer}>
        <p>© 2025 PlanStar — Todos os direitos reservados.</p>
      </div>
    </footer>
   )
}

export default Footer;