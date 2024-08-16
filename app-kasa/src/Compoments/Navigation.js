import { Link } from 'react-router-dom'
 
function Navigation() {
    return (
        <nav>
            <Link to="/" className="kasa-lien">Accueil</Link>
            <Link to="/APropos/APropos" className="kasa-lien">APropos</Link>
        </nav>
    )
}

export default Navigation