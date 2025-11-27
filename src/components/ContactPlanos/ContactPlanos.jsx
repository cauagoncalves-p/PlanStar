import styles from "../ContactPlanos/ContactPlanos.module.css"
import iconearrow from "../ContactPlanos/assets/right-arrow.png"
const ContactPlanos = ({title, icone, describe, departament}) => {
    return(
        <div className={styles.contact_plans_box}>
          <div className={styles.contact_plans_header}>
              <img src={icone} alt="Ícone de e_mail"/>
              <p>{title}</p>
          </div>

          <div className={styles.contact_plans_description}>
            <p>{describe}</p>
          </div>

          <button className={styles.contact_plans_button}>
            {departament}
            <img src={iconearrow} alt="Icone de seta"/>
          </button>
        </div>
    )
}

export default ContactPlanos;