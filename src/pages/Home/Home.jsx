import Features from "../../components/Features-planstar/Features";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "../Home/Home.css"
import image_main_home from "../Home/assets/imagem-men-home.png"
const Home = () =>{
    return(
        <div>
            <Header/>
            <section class="hero-planstar">
                <div class="hero-left">
                    <h1>Organização de rotina feita para um dia a dia mais leve e equilibrado.</h1>
                
                    <p class="hero-sub">
                        Com métodos práticos e consultoria humanizada, a PlanStar ajuda você a
                        conquistar uma rotina funcional, produtiva e alinhada ao seu
                        bem-estar. Transforme seu cotidiano com leveza.
                    </p>
                    
                    <div class="hero-buttons">
                        <a href="#contact" class="btn-primary-hero">Entrar em contato</a>
                        <span class="hero-note">Sem burocracia • Resposta rápida</span>
                    </div>
                </div>
                
                <div class="hero-right">
                    <img src={image_main_home} alt="PlanStar Rotina" class="hero-img"/>
                </div>
            </section>

            <section class="features-planstar">
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
            <Footer/>
        </div>
    )
}

export default Home;