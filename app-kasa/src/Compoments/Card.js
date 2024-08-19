import { Link } from 'react-router-dom'
import '../Styles/Card.css'


function Card({ title , cover, id}){

    return (
        <Link to="/InfoLacation" className="kasa-card" id={id} onClick={(e) => id}>
            <img className='kasa-card-cover' src={cover} alt={`${title}`}/>
            <span className="kasa-card-title">{title}</span>
        </Link>
    )

}

export default Card;