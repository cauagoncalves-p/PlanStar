import styles from "../StartText/StartText.module.css"
const StartText = ({text}) =>{
    return(
         <p className={styles.start_text}>{text}</p>
    )
}

export default StartText;