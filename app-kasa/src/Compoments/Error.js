import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import '../Styles/Css/Error.css'

function Error() {
    useEffect(() => {
		document.title = `Erreur`
	}, [])
    return (
        <div className='kasa-content-error'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="kasa-lien-back">Retourner sur la page d'accueil</Link>
        </div>
        
    )
}
 
export default Error