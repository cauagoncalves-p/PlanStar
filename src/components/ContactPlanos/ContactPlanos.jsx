import styles from "./ContactPlanos.module.css";
import iconearrow from "./assets/right-arrow.png";
import { Link } from "react-router-dom";

const ContactPlanos = ({ title, icone, describe, departament, route }) => {
    return (
        <div className={styles.contact_plans_box}>
            <div className={styles.contact_plans_header}>
                <img src={icone} alt="Ícone" />
                <p>{title}</p>
            </div>

            <div className={styles.contact_plans_description}>
                <p>{describe}</p>
            </div>

           <Link
            to="/contatoForm"
            state={route.state}
            className={styles.contact_plans_button}
          >
            {departament}
            <img src={iconearrow} alt="Seta" />
          </Link>
        </div>
    );
};

export default ContactPlanos;
