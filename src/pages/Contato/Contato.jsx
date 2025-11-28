import ContactPlanos from "../../components/ContactPlanos/ContactPlanos";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "../Contato/Contato.module.css"
import iconeEmail from "../Contato/assets/email.png";
import iconeSuporte from "../Contato/assets/suporte.png"
const Contato = () =>{
    return(
        <div>
            <Header/>
            <main>
             <section className={styles.main_title}>
                <h1>Como podemos ajudar?</h1>
                <p>Entre em contato com a equipe da PlanStar para tirar dúvidas, receber orientações e dar o primeiro passo para uma rotina mais leve e organizada.</p>
            </section> 

            <section className={styles.contact_plans_section}>
                <ContactPlanos
                title="Fale com o time de PPD"
                icone={iconeEmail}
                describe="Saiba mais sobre nossos planos, valores e formas de atendimento. Nossa equipe está pronta para te orientar no que fizer sentido para você."
                departament="Fale com PPD"
                route={{
                    state: {
                        title: "Fale com o time de PPD",
                        benefits: [
                            "Entre em contato rapidamente",
                            "Tire dúvidas e receba orientações",
                            "Suporte direto do time de PPD"
                        ],
                        buttonText: "Enviar mensagem para PPD"
                    }
                }}
            />

            <ContactPlanos
                title="Fale com o time de Suporte"
                icone={iconeSuporte}
                describe="Precisa de ajuda ou orientação técnica? Nossa equipe de suporte está pronta para resolver seu problema e tirar todas as suas dúvidas rapidamente."
                departament="Contate o Suporte"
                route={{
                    state: {
                        title: "Fale com o time de Suporte",
                        benefits: [
                            "Atendimento técnico rápido",
                            "Resolução de problemas",
                            "Suporte direto do time de Suporte"
                        ],
                        buttonText: "Enviar mensagem para Suporte"
                    }
                }}
            />
            </section>
            </main>
            <Footer/>
        </div>
      
    )
}

export default Contato;