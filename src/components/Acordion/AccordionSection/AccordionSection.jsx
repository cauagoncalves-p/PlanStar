import Acordion from "../ActionButton/Accordion";
import style from "./AccordionSection.module.css";

const AccordionSection = () =>{
    return(
        <section className={style.accordion}>
             <h2>Duvidas sobre a PlanStar? Confira abaixo</h2>
             <Acordion title="O que é a PlanStar?" describe="A PlanStar ajuda você a organizar sua rotina de forma leve, prática
              e personalizada."/>
             <Acordion title="Como funciona o acompanhamento?" describe="Você recebe orientação contínua e ajustes conforme sua rotina
              evolui."/>
             <Acordion title="É realmente humanizado?" describe="Sim! Nada de métodos rígidos. A gente respeita seu tempo e sua
              energia."/>
        </section>
    )
}

export default AccordionSection;