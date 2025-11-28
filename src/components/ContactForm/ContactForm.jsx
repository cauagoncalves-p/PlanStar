import { useLocation } from "react-router-dom";
import styles from "../ContactForm/Contact.module.css"; 

const ContactForm = () => {
  const location = useLocation();
  const { title, benefits, buttonText } = location.state || {
    title: "Contato",
    benefits: ["Preencha o formulário abaixo"],
    buttonText: "Enviar"
  };

  return (
    <div className={styles.container}>
      {/* Coluna esquerda */}
      <div className={styles.left}>
        <h1 className={styles.leftTitle}>{title}</h1>

        <ul className={styles.list}>
          {benefits.map((b, i) => (
            <li key={i} className={styles.listItem}>
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Formulário */}
      <form className={styles.form}>
        <h2 className={styles.formTitle}>Como podemos ajudar você?</h2>

        <label className={styles.label}>Nome completo</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Seu nome"
        />

        <label className={styles.label}>E-mail</label>
        <input
          className={styles.input}
          type="email"
          placeholder="seuemail@planstar.com.br"
        />

        <label className={styles.label}>Mensagem</label>
        <textarea
          className={styles.textarea}
          placeholder="Digite sua mensagem..."
        />

        <button type="submit" className={styles.button}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
