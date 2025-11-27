import styles from "../Footer/Footer.module.css"
import logoInstagram from "../Footer/assets/instagram-logo.png"
import logoLinkedln from "../Footer/assets/linkedin-logo.png"
import logoPlanStar from "../../assets/favicon-logo.png"

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
                <a href="#">Início</a>
                <a href="#">Sobre</a>
                <a href="#">Missão</a>
                <a href="#services">Serviços</a>
                <a href="./contato.html">Contato</a>
            </div>
          </div>
        
          <div className={styles.contacts_logo}>
              <h3>Informações de contato</h3>
              <div>
                <a href="">Email para contato: planstar@gmail.com</a>
                <a href="">WhatsApp: (11) 98756_4321</a>
                <a href="">Local: Espro Santo Amaro</a>
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
                <a href=""><img src={logoInstagram} alt="Logo do instagram"/></a>
                <a href=""><img src={logoLinkedln} alt="Logo do Linkedln"/></a>
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