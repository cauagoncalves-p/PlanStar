import { useState } from "react";
import styles from "../ActionButton/Accordion.module.css";
import arrowDown from "../ActionButton/assets/arrowdown.png";

const Acordion = ({title, describe}) =>{
const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }
  
    return(
         <div className={styles.accordion_item}>
          <button onClick={toggle} className={styles.accordion_header}>{title}

          <img
          className={`${styles.arrow} ${open ? styles.open : ""}`}
          src={arrowDown}
          alt="Ícone ArrowDown"
        />
          </button>

          <div className={styles.accordion_content} style={{ maxHeight: open ? "200px" : "0"}}>
            <p>{describe}</p>
          </div>
        </div>
    )
}

export default Acordion;