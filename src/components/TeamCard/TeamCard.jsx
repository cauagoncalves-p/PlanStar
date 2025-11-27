import styles from "../TeamCard/TeamCard.module.css"
const TeamCard = ({phone,name}) => {
    return(
        <div className={styles.team_card}>
            <img src={phone} alt="Foto CEO" className={styles.team_photo}/>
            <h3 className={styles.team_name}>{name}</h3>
            <p className={styles.team_role}>Co_Fundador • CEO</p>
        </div>
    )
}

export default TeamCard;
