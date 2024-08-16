import { useState } from 'react'
import '../../Styles/Box.css'

function Service(){
    const [isOpen, setIsOpen] = useState(true)
    return isOpen ? (
        <div>
            <div className="kasa-box">
                <h4>Service</h4>
                <h4 className="kasa-btn-open-box" onClick={() => setIsOpen(false)}>^</h4>
            </div>
        </div>  
    ) : (
        <div>
            <div className="kasa-box">
                <h4>Service</h4>
                <h4 className="kasa-btn-open-box" onClick={() => setIsOpen(true)}>^</h4>
            </div>
            <div className="kasa-text">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du
                    voisinage entraînera une exclusion de notre plateforme.
                </p>
            </div>
        </div> 
    )
}

export default Service