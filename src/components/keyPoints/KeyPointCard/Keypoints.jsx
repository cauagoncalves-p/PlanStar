import styles from "../KeyPointCard/KeyPoints.module.css"

const KeyPoints = ({image, alt, title, describe}) =>{
    return(
        <div className={styles.keyPoints_describe}>
            <div className={styles.keyPoints_divImg}>
              <img src={image} alt={alt}/>
            </div>
            <h4>{title}</h4>
            <p>{describe}</p>
        </div>
    )
}

export default KeyPoints;