import { Link } from 'react-router-dom'
import '../Styles/Css/Card.css'


function Card({ title , cover, id}){

    return (
        <Link to={`/InfoLocation/${id}`} className="kasa-card">
            <img className='kasa-card-cover' src={cover} alt={`${title}`}/>
            <span className="kasa-card-title">{title}</span>
        </Link>
    ) 

}

export default Card;