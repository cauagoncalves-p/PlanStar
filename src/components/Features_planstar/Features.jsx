import styles from "../Features_planstar/Features.module.css"
const Features = ({title, describe}) =>{
    return(
        <div className={styles.feature_item}>
          <h3>{title}</h3>
          <p>{describe}</p>
        </div>
    )
}

export default Features;