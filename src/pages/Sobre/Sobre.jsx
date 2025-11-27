import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import StartText from "../../components/StartText/StartText";
import TeamCard from "../../components/TeamCard/TeamCard";
import styles from "../Sobre/Sobre.module.css"
import PhotoCTOMen from "./assets/CTOMEN.jpeg"
import PhotoCTOWoman from "./assets/CTOWOMAN.jpeg"
const Sobre = () =>{
    return(
        <div>
            <Header/>
            <main>
                <section className={styles.main_title}>
                    <div>
                        <h3>Sobre a PlanStar</h3>
                        <h1>De uma ideia simples a uma missão real</h1>
                    </div>
                    <div className={styles.about_long_text}>
                        <p>
                            A PlanStar nasceu de uma ideia simples: as pessoas não precisam de mais pressão — elas precisam de clareza, equilíbrio e uma rotina que abrace quem elas realmente são.
                            Em um mundo que exige velocidade, produtividade e resultados o tempo todo, escolhemos o caminho contrário: uma forma humanizada de organizar a rotina, feita para pessoas reais com vidas reais.
                        </p>
                        <p>
                            Aqui na PlanStar, acreditamos que organizar seu dia a dia deve ser leve, possível e até acolhedor. Nada de métodos rígidos. Nada de cobranças surreais. O que construímos juntos é o seu ritmo, o seu tempo, do seu jeito.
                        </p>
                        <p>
                            Nosso trabalho é ajudar você a criar uma rotina que faça sentido — uma que reduza a ansiedade, traga direção e transforme seus dias em algo mais leve e intencional.
                            Se sua vida está corrida, bagunçada ou só precisa de mais estrutura, a PlanStar está aqui para te guiar com empatia, simplicidade e respeito.
                        </p>
                        <p>
                            Porque uma vida equilibrada não é algo que você encontra — é algo que você constrói, um passo gentil por vez.
                        </p>
                    </div>
                </section>

                <section className={styles.team_section}>
                    <h2 className={styles.team_title}>Conheça a equipe que deu início a tudo</h2>
                    <div className={styles.team_container}>
                        <TeamCard name="Ana mota" phone={PhotoCTOWoman}/>
                        <TeamCard name="Gabriel Meneses" phone={PhotoCTOMen}/>
                    </div>
                </section>

                <section className={styles.start_section}>
                    <div className={styles.start_inner}>
                        <h2 className={styles.start_title}>Como tudo começou</h2>
                        <StartText text="A PlanStar nasceu em 2025, dentro da Espro, quando dois colegas — que viviam tentando organizar a própria rotina — perceberam que não eram os únicos enfrentando a famosa mistura de correria, falta de tempo e agendas que nunca se encaixam."/>
                        <StartText text="O que começou como uma tentativa de ajudar amigos e colegas a se organizarem melhor logo se transformou em algo maior: uma ideia real, com propósito e vontade de fazer diferença."/>
                        <StartText text="Foi assim que surgiu a PlanStar: uma iniciativa simples, humana e acessível, criada para trazer leveza ao dia a dia e mostrar que rotina não precisa ser uma batalha — pode ser um caminho mais fácil, mais claro e mais seu."/>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Sobre;