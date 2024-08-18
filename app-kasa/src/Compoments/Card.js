import { Link } from 'react-router-dom'
import '../Styles/Card.css'


function Card({ title , cover}){
    return (
        <Link to="/InfoLacation" className="kasa-card">
            <img className='kasa-card-cover' src={cover} alt={`${title}`}/>
            <span className="kasa-card-title">{title}</span>
        </Link>
    )

}

export default Card;