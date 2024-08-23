import { NavLink } from 'react-router-dom'
import '../Styles/Css/Navigation.css'
 
function Navigation() {
    return (
        <nav className="kasa-lien-content">
            <NavLink to="/" className={({ isActive }) => isActive ? 'kasa-lien-accueil active' : 'kasa-lien-accueil'}>Accueil</NavLink>
            <NavLink to="/APropos" className={({ isActive }) => isActive ? 'kasa-lien-apropos active' : 'kasa-lien-apropos'}>A Propos</NavLink>
        </nav>
    )
}

export default Navigation