import { Link } from "react-router-dom";
import AccordionSection from "../../components/Acordion/AccordionSection/AccordionSection";
import Features from "../../components/Features_planstar/Features";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import KeyPointSection from "../../components/keyPoints/KeyPointSection/KeyPointSection";
import styles from "../Home/Home.module.css"
import image_main_home from "../Home/assets/imagem-men-home.png"
const Home = () =>{
    return(
        <div>
            <Header/>
            <section className={styles.hero_planstar}>
                <div className={styles.hero_left}>
                    <h1>Organização de rotina feita para um dia a dia mais leve e equilibrado.</h1>
                
                    <p className={styles.hero_sub}>
                        Com métodos práticos e consultoria humanizada, a PlanStar ajuda você a
                        conquistar uma rotina funcional, produtiva e alinhada ao seu
                        bem_estar. Transforme seu cotidiano com leveza.
                    </p>
                    
                    <div className={styles.hero_buttons}>
                        <Link to="/contato">
                        <a href="#contact" className={styles.btn_primary_hero}>Entrar em contato</a>
                        </Link>
                        <span className="hero_note">Sem burocracia • Resposta rápida</span>
                    </div>
                </div>
                
                <div className={styles.hero_right}>
                    <img src={image_main_home} alt="PlanStar Rotina" className={styles.hero_img}/>
                </div>
            </section>

            <section className={styles.features_planstar}>
                <Features title="Humanizada" describe=" Nada de métodos rígidos. Na PlanStar, sua rotina é organizada de forma
                leve, respeitando seu tempo, limites e realidade. Você recebe
                orientação personalizada para viver melhor."/>

                <Features title="Privada e Segura" describe="Suas informações e desafios do dia a dia são tratados com total
                confidencialidade. Nada é armazenado sem sua permissão — você sempre
                tem controle total sobre seus dados."/>

                <Features title="Acessível" describe=" Toda a consultoria foi pensada para ser inclusiva e acessível.
                Independente do seu nível de organização, você recebe apoio real para
                transformar sua rotina de forma prática e simples."/>
            </section>

            <KeyPointSection/>
            <AccordionSection/>
            <Footer/>
        </div>
    )
}

export default Home;