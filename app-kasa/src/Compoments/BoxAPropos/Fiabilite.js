import { useState } from 'react'
import Chevron from '../../Assets/Chevron.png'
import '../../Styles/Css/Box.css'

function Fiabilite(){
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div>
            <div className="kasa-box">
                <h4>Fiabilité</h4>
                <img src={Chevron} alt='icone chevron' className='kasa-btn-open-box' onClick={() => setIsOpen(false)}/>
            </div>
        </div>
    ) : (
        <div>
            <div className="kasa-box">
                <h4>Fiabilité</h4>
                <img src={Chevron} alt='icone chevron' className='kasa-btn-close-box' onClick={() => setIsOpen(true)}/>
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