import "../Features-planstar/Features.css"
const Features = ({title, describe}) =>{
    return(
        <div class="feature-item">
          <h3>{title}</h3>
          <p>{describe}</p>
        </div>
    )
}

export default Features;