import "../ContactPlanos/ContactPlanos.css"
import iconearrow from "../ContactPlanos/assets/right-arrow.png"
const ContactPlanos = ({title, icone, describe, departament}) => {
    return(
        <div class="contact-plans-box">
          <div class="contact-plans-header">
              <img src={icone} alt="Ícone de e-mail"/>
              <p>{title}</p>
          </div>

          <div class="contact-plans-description">
            <p>{describe}</p>
          </div>

          <button class="contact-plans-button">
            {departament}
            <img src={iconearrow} alt="Icone de seta"/>
          </button>
        </div>
    )
}

export default ContactPlanos;