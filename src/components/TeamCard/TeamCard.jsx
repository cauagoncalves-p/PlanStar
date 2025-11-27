import "../TeamCard/TeamCard.css"
const TeamCard = ({phone,name}) => {
    return(
        <div class="team-card">
            <img src={phone} alt="Foto CEO" class="team-photo"/>
            <h3 class="team-name">{name}</h3>
            <p class="team-role">Co-Fundador • CEO</p>
        </div>
    )
}

export default TeamCard;
