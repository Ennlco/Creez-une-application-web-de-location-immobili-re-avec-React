import { useState } from 'react'
import '../../Styles/Box.css'

function Securite(){
    const [isOpen, setIsOpen] = useState(true)
    return isOpen ? (
        <div>
            <div className="kasa-box">
                <h4>Sécurité</h4>
                <h4 className="kasa-btn-open-box" onClick={() => setIsOpen(false)}>^</h4>
            </div>
        </div>
    ) : (
        <div>
            <div className="kasa-box">
                <h4>Sécurité</h4>
                <h4 className="kasa-btn-open-box" onClick={() => setIsOpen(true)}>^</h4>
            </div>
            <div className="kasa-text">
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                    chaque logement correspond aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes
                    de vérifier que les standards sont bien respectés. Nous organisons également des
                    ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </div>
        </div>
    )
}

export default Securite