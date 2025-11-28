import ContactForm from "../../components/ContactForm/ContactForm"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import styles from "..//FormularioContatos/FormularioContatos.module.css"
const FormularioContatos = () =>{
    return(
        <div>
            <Header/>
            <main className={styles.main_title}>
                <ContactForm/>
            </main>
            <Footer/>
        </div>
    )
}

export default FormularioContatos;