import KeyPoints from "../KeyPointCard/Keypoints";
import styles from "../KeyPointSection/KeyPointSection.module.css";
import iconIMGClipBoard from "../KeyPointSection/assets/clipboard.png";
import iconIMGWind from "../KeyPointSection/assets/Wind.png";
import iconIMGHeart from "../KeyPointSection/assets/Heart.png";
import iconIMGTarget from "../KeyPointSection/assets/Target.png";
import iconIMGTeam from "../KeyPointSection/assets/Team.png";
import iconIMGPeople from "../KeyPointSection/assets/People.png";

const KeyPointSection = () =>{
    return(
        <section className={styles.keyPoints}>
        <h1 className={styles.gradient_text}>Por que a PlanStar é a melhor escolha para transformar sua rotina?</h1>
        <div className={styles.keyPoints_div}>
            <KeyPoints image={iconIMGClipBoard} alt="Organização personalizada" title="Organização personalizada" describe="  Cada rotina é única. A PlanStar cria um plano que realmente combina
              com sua vida, horário e energia, sem fórmulas prontas ou pressão."/>

            <KeyPoints image={iconIMGWind} alt="Icone Leveza sem complicação" title="Leveza sem complicação" describe=" Transformamos sua rotina de forma simples, prática e sem estresse.
              Você só segue passos claros e sente o dia a dia ficando mais leve."/>

            <KeyPoints image={iconIMGTeam} alt="Icone Acompanhamento contínuo" title="Acompanhamento contínuo" describe="   Você não fica sozinho. A PlanStar acompanha seu progresso e ajuda a
              ajustar sua rotina sempre que necessário."/>

            <KeyPoints image={iconIMGTarget} alt="Icone Clareza e foco" title="Clareza e foco" describe="  Chega de sobrecarga mental. Te ajudamos a organizar prioridades para
              que você tenha clareza do que realmente importa."/>

            <KeyPoints image={iconIMGHeart} alt="Icone Bem-estar em primeiro lugar" title="Bem-estar em primeiro lugar" describe=" Não é só sobre produtividade — é sobre você. A PlanStar ajuda a
              equilibrar rotina, descanso, estudo e vida pessoal."/>
              
            <KeyPoints image={iconIMGPeople} alt="Icone Método humanizado" title="Método humanizado" describe=" Nada de rigidez. Respeitamos seu ritmo, suas limitações e seu
              momento atual para construir uma rotina que realmente funcione para
              você."/>
        </div>
      </section>
    )
}

export default KeyPointSection;