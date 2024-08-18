import { Link } from 'react-router-dom'
import '../Styles/Navigation.css'
 
function Navigation() {
    return (
        <nav className="kasa-lien-content">
            <Link to="/" className="kasa-lien-accueil">Accueil</Link>
            <Link to="/APropos" className="kasa-lien-apropos">A Propos</Link>
        </nav>
    )
}

export default Navigation