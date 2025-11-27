import ContactPlanos from "../../components/ContactPlanos/ContactPlanos";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "../Contato/Contato.css"
import email from "../Contato/assets/email.png"
const Contato = () =>{
    return(
        <div>
            <Header/>
            <main>
             <section class="main-title">
                <h1>Como podemos ajudar?</h1>
                <p>Entre em contato com a equipe da PlanStar para tirar dúvidas, receber orientações e dar o primeiro passo para uma rotina mais leve e organizada.</p>
            </section> 

            <section class="contact-plans-section">
                <ContactPlanos title="Planos" icone={email} describe="Saiba mais sobre nossos planos, valores e formas de atendimento. Nossa equipe está pronta para te orientar no que fizer sentido para você." departament=" Fale com o departamento de PPD."/>
                
                <ContactPlanos title="Planos" icone={email} describe="Saiba mais sobre nossos planos, valores e formas de atendimento. Nossa equipe está pronta para te orientar no que fizer sentido para você." departament=" Fale com o departamento de PPD."/>
            </section>
            </main>
            <Footer/>
        </div>
      
    )
}

export default Contato;