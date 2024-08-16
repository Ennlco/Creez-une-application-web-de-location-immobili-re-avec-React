import { useState } from 'react'
import '../../Styles/Box.css'

function Fiabilite(){
    const [isOpen, setIsOpen] = useState(true)
    return isOpen ? (
        <div>
            <div className="kasa-box">
                <h4>Fiabilité</h4>
                <h4 className="kasa-btn-open-box" onClick={() => setIsOpen(false)}>^</h4>
            </div>
        </div>
    ) : (
        <div>
            <div className="kasa-box">
                <h4>Fiabilité</h4>
                <h4 className="kasa-btn-open-box" onClick={() => setIsOpen(true)}>^</h4>
            </div>
                <div className="kasa-text">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale.
                        Les photos sont conformes aux logements,
                        et toutes les information sont régulièrement vérifiées par nos équipes.
                    </p>
                </div>
        </div>
    )
}

export default Fiabilite